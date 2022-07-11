import React from "react";

import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import DashboardHeader from "./components/DashboardHeader";
import SessionOverview from "./components/SessionOverview";
import RecentClients from "./components/RecentClients";

import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";
import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";
import moment from "moment";

export interface IDashboardChildrenProps {
  open: boolean;
  toggleDrawer: () => void;
  unreadMessages?: number;
}

const AdminDashboard = () => {
  const { getAllSessions } = useSessionInfo();
  const { getRecentClientOrders } = useClientInfo();

  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);
  const [clients, setClients] = React.useState<IClientInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const formatDate = React.useCallback((date: string) => {
    const formattedDate = moment(date).format("MMMM DD YYYY");
    return formattedDate;
  }, []);

  React.useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      try {
        const allSessions = await getAllSessions();
        allSessions.sort(
          (a: ISessionInfo, b: ISessionInfo) =>
            Date.parse(a.date) - Date.parse(b.date)
        );
        setSessions(allSessions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const fetchRecentClients = async () => {
      setLoading(true);
      try {
        const recentClients = await getRecentClientOrders();
        recentClients.sort(
          (a: IClientInfo, b: IClientInfo) =>
            Date.parse(b.updatedAt!) - Date.parse(a.updatedAt!)
        );
        setClients(recentClients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentClients();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DashboardHeader open={open} toggleDrawer={toggleDrawer} />
        <SideNav open={open} toggleDrawer={toggleDrawer} />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <SessionOverview sessions={sessions} formatDate={formatDate} />
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <RecentClients clients={clients} />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AdminDashboard;

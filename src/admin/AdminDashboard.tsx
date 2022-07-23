import React from "react";

import { Box, CircularProgress, Container, Grid, Paper } from "@mui/material";

import SessionOverview from "./components/SessionOverview";
import RecentClients from "./components/RecentClients";
import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";

export interface IDashboardChildrenProps {
  open: boolean;
  toggleDrawer: () => void;
}

const AdminDashboard = () => {
  const { getRecentClientOrders } = useClientInfo();

  const [clients, setClients] = React.useState<IClientInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

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
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 4, height: "100%", marginTop: { md: "80px" } }}
          >
            <Grid container spacing={3} sx={{ height: "100%" }}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <SessionOverview />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <RecentClients clients={clients} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;

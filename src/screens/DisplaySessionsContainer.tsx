import React from "react";

import Header from "../components/Header";
import DisplaySessions from "../components/DisplaySessions";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";
import moment from "moment";

const DisplayAvailableSessions = () => {
  const { getAllSessions } = useSessionInfo();

  const [sessions, setSessions] = React.useState<ISessionInfo[] | null>(null);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await getAllSessions();
        const arrangeDate = allSessions
          .sort(
            (a: ISessionInfo, b: ISessionInfo) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .map((session: ISessionInfo) => {
            const date = moment(session.date).format("ddd, MMMM Do YYYY");
            return {
              ...session,
              date: date,
              price: `$${session.price}.00`,
              sessionImage: {
                name: `https://${session.sessionImage.bucket}.s3.amazonaws.com/${session.sessionImage.key}`,
              },
            };
          });

        setSessions(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={3}
        sx={{ paddingTop: "30px", justifyContent: "center", minHeight: "75vh" }}
      >
        {!sessions ? (
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="h1" sx={{ fontSize: "32px" }}>
              Loading...
            </Typography>
          </Grid>
        ) : (
          sessions.map((session) => (
            <DisplaySessions key={session.id} session={session} />
          ))
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default DisplayAvailableSessions;

import React from "react";
import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";
import moment from "moment";
import DisplaySessions from "../components/DisplaySessions";
import Header from "../components/Header";
import HeroHeader from "../components/UpcomingSessions";
import MainFeaturedPost from "../components/UpcomingSessions";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";

const DisplayAvailableSessions = () => {
  const { getAllSessions } = useSessionInfo();

  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);

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

  // if (!sessions) {
  //   return "Loading...";
  // }

  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "slategrey" }}>
        <Header />
        <Grid
          container
          rowSpacing={3}
          sx={{ paddingTop: "30px", justifyContent: "center" }}
        >
          {sessions.map((session) => {
            return <MainFeaturedPost key={session.id} post={session} />;
          })}
        </Grid>
        {/* <DisplaySessions sessions={sessions} /> */}
        <Footer />
      </Container>
    </>
  );
};

export default DisplayAvailableSessions;

import React from "react";

import moment from "moment";
import { Grid } from "@mui/material";

import DisplaySessions from "../components/DisplaySessions";
import NoAvailableSessions from "../components/NoAvailableSessions";
import Loading from "../components/Loading";
import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";

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
        // console.log(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid
        container
        rowSpacing={3}
        sx={{
          marginTop: { md: "20px", sm: "5%", xs: "10%" },
          justifyContent: "center",
          minHeight: { md: "72vh", sm: "60vh", xs: "72vh" },
          alignItems: "center",
        }}
      >
        {!sessions ? (
          <Loading />
        ) : (
          sessions.map((session) => (
            <DisplaySessions key={session.id} session={session} />
          ))
        )}
        {sessions !== null && sessions.length === 0 && <NoAvailableSessions />}
      </Grid>
    </>
  );
};

export default DisplayAvailableSessions;

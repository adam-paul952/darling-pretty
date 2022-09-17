import React from "react";
import { Helmet } from "react-helmet";

import { Grid } from "@mui/material";

import DisplaySessions from "../components/DisplaySessions";
import NoAvailableSessions from "../components/NoAvailableSessions";
import DisplaySessionsLoading from "../skeletonScreens/DisplaySessionsLoading";
import useSessionInfo from "../hooks/useSessionInfo";
import { useSessionContext } from "../context/SessionContext";
import { Container } from "@mui/system";

const DisplayAvailableSessions = () => {
  const { sessions } = useSessionContext();
  const { isLoading } = useSessionInfo();

  return (
    <>
      <Helmet>
        <title>Darling Pretty Photography - Sessions</title>
        <meta
          name="description"
          content="View all available sessions offered by Darling Pretty Photography"
        ></meta>
      </Helmet>

      <Container>
        <Grid
          container
          rowSpacing={3}
          sx={{
            marginTop: { sm: "5%", xs: "10%" },
            justifyContent: "center",
            // minHeight: { md: "75vh", sm: "60vh", xs: "72vh" },
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <DisplaySessionsLoading />
          ) : (
            sessions?.map((session) => (
              <DisplaySessions key={session.id} session={session} />
            ))
          )}
          {sessions !== null && sessions.length === 0 && (
            <NoAvailableSessions />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default DisplayAvailableSessions;

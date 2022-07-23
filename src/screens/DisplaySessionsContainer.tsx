import React from "react";

import { Grid } from "@mui/material";

import DisplaySessions from "../components/DisplaySessions";
import NoAvailableSessions from "../components/NoAvailableSessions";
import DisplaySessionsLoading from "../skeletonScreens/DisplaySessionsLoading";
import useSessionInfo from "../hooks/useSessionInfo";
import { useSessionContext } from "../context/SessionContext";

const DisplayAvailableSessions = () => {
  const { sessions } = useSessionContext();
  const { isLoading } = useSessionInfo();

  return (
    <>
      <Grid
        container
        rowSpacing={3}
        sx={{
          marginTop: { md: "20px", sm: "5%", xs: "10%" },
          justifyContent: "center",
          minHeight: { md: "75vh", sm: "60vh", xs: "72vh" },
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
        {sessions !== null && sessions.length === 0 && <NoAvailableSessions />}
      </Grid>
    </>
  );
};

export default DisplayAvailableSessions;

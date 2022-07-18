import React from "react";

import { Box, Paper, Typography } from "@mui/material";

const NoAvailableSessions: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{ width: "90%", padding: "10px", textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ padding: "5px 0" }}>
          We&rsquo;re sorry, there&rsquo;s currently no available sessions.
        </Typography>
        <Typography variant="h4" sx={{ padding: "5px 0" }}>
          Please check back frequently
        </Typography>
      </Paper>
    </Box>
  );
};

export default NoAvailableSessions;

import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h4" sx={{ padding: "5px 0" }}>
        We&rsquo;re sorry, there&rsquo;s currently no available sessions.
      </Typography>
      <Typography variant="h4" sx={{ padding: "5px 0" }}>
        Please check back frequently
      </Typography>
    </Box>
  );
};

export default NoAvailableSessions;

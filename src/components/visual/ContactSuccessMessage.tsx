import React from "react";

import { Box, Typography } from "@mui/material";

const SubmissionComplete = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Typography variant="h4">
        Thanks for your submission, someone will be in touch soon!
      </Typography>
    </Box>
  );
};

export default SubmissionComplete;

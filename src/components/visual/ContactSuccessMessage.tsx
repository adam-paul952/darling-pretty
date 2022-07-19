import React from "react";

import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const SubmissionComplete = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: { sm: "80%", xs: "100%" },
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Typography variant="h4">
        Thanks for your submission, someone will be in touch soon!
      </Typography>
      <Button
        component={Link}
        to="/"
        sx={{
          fontSize: { xs: "14px", sx: "16px" },
          mt: 2,
          "&:hover": {
            color: "white",
            backgroundColor: "darkblue",
          },
          backgroundColor: "#000",
          color: "#fff",
          width: { xs: "100%", sm: "300px" },
        }}
      >
        Return to Darling Pretty Home
      </Button>
    </Box>
  );
};

export default SubmissionComplete;

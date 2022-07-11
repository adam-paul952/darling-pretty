import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Stack sx={{ marginTop: "15%" }}>
        <Typography component="h2" sx={{ textAlign: "center" }}>
          404 Page Not Found
        </Typography>
        <Button variant="text" href="/">
          Return to Darling Pretty Home
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;

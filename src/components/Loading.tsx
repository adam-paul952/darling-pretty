import React from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

const Loading: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "Column",
      alignItems: "center",
      height: { md: "78vh" },
    }}
  >
    <Typography variant="h4">Darling Pretty Photograhpy</Typography>
    <Box sx={{ padding: "20px 0" }}>
      <CircularProgress />
    </Box>
  </Box>
);
export default Loading;

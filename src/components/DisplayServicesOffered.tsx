import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { getServiceThumbnail } from "./getServiceThumbnail";
import { servicesAvailable } from "../constants/app";

const DisplayServicesOffered = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        flexDirection: "column",
        paddingTop: "25px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {servicesAvailable.map((service) => (
          <Grid
            item
            xs={12}
            md={3}
            maxHeight={300}
            key={service.id}
            sx={{
              backgroundColor: "#f2f0f1",
              textAlign: "center",
              padding: "30px",
              width: "200px",
              borderRadius: "10px",
              margin: "10px !important",
            }}
          >
            <Typography variant="h5" sx={{ padding: "10px" }}>
              {service.name}
            </Typography>
            {getServiceThumbnail(service.name)}
            <Typography sx={{ padding: "10px" }}>
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DisplayServicesOffered;

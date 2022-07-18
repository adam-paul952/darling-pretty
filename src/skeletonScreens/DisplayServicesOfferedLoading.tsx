import React from "react";

import { Box, Grid, Skeleton } from "@mui/material";

const DisplayServicesOfferedLoading = () => {
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
        {Array.from(Array(10).keys()).map((service, index) => (
          <Grid
            item
            xs={10}
            md={3}
            sm={7}
            key={index}
            sx={{
              backgroundColor: "#f2f0f1",
              textAlign: "center",
              padding: "30px",
              width: "200px",
              borderRadius: "10px",
              margin: "10px !important",
            }}
          >
            <Skeleton
              width="50%"
              height={30}
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <Skeleton
              variant="rectangular"
              width={35}
              height={35}
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <Skeleton
              width="85%"
              height={150}
              sx={{ marginRight: "auto", marginLeft: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DisplayServicesOfferedLoading;

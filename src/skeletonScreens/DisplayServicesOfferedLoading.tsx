import React from "react";

import { Paper, Skeleton } from "@mui/material";
import Carousel from "mui-carousel";

const DisplayServicesOfferedLoading = () => {
  return (
    <Carousel showSlides={4} autoPlay={false} sx={{ mt: 4 }} spacing={2}>
      {Array.from(Array(4).keys()).map((_, index) => (
        <Paper
          key={index}
          sx={{
            backgroundColor: "#f2f0f1",
            textAlign: "center",
            padding: "30px",
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
        </Paper>
      ))}
    </Carousel>
  );
};

export default DisplayServicesOfferedLoading;

import React from "react";
import Slider from "react-slick";

import { Paper, Skeleton } from "@mui/material";

const DisplayServicesOfferedLoading = () => {
  const settings = {
    slidesToShow: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default DisplayServicesOfferedLoading;

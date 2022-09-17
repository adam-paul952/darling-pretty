import React from "react";
import Slider from "react-slick";

import { Container, Paper, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DisplayServicesOfferedLoading from "../skeletonScreens/DisplayServicesOfferedLoading";

interface IDisplayServicesOfferedProps {
  servicesData: { data: any; loading: boolean };
}

const DisplayServicesOffered: React.FC<IDisplayServicesOfferedProps> = (
  props
) => {
  const { data, loading } = props.servicesData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
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
    <Container sx={{ paddingTop: 3 }}>
      {loading ? (
        <DisplayServicesOfferedLoading />
      ) : (
        <Slider {...settings}>
          {data.servicesOfferedCollection?.items.map((service: any) => (
            <Paper
              key={service.serviceName}
              sx={{
                backgroundColor: "#f2f0f1",
                textAlign: "center",
                padding: 2,
                borderRadius: "10px",
                margin: 1,
              }}
            >
              <Typography variant="h5" sx={{ padding: 1 }}>
                {service.serviceName}
              </Typography>
              <img
                src={service.serviceImage.url}
                style={{ margin: "auto" }}
                alt={service.imageAltDescription}
              />
            </Paper>
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default DisplayServicesOffered;

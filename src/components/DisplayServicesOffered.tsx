import React from "react";

import { Paper, Typography } from "@mui/material";
import Carousel from "mui-carousel";

import DisplayServicesOfferedLoading from "../skeletonScreens/DisplayServicesOfferedLoading";
import useContentful from "../hooks/useContentful";

const query = /* GraphQL */ `
  query {
    servicesOfferedCollection {
      items {
        serviceName
        serviceImage {
          url
        }
      }
    }
  }
`;

const DisplayServicesOffered: React.FC = () => {
  const { data, loading } = useContentful(query);

  return (
    <>
      {loading ? (
        <DisplayServicesOfferedLoading />
      ) : (
        <Carousel
          sx={{
            mt: 3,
          }}
          autoPlay
          centerMode
          infinity
          showSlides={4}
          spacing={2}
          speed={3000}
        >
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
              <img src={service.serviceImage.url} />
            </Paper>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default DisplayServicesOffered;

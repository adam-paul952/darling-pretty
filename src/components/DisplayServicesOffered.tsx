import React from "react";

import { Box, Grid, Typography } from "@mui/material";

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
        serviceDescription
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
            {data.servicesOfferedCollection?.items.map((service: any) => (
              <Grid
                item
                xs={10}
                md={3}
                sm={7}
                key={service.serviceName}
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
                  {service.serviceName}
                </Typography>
                <img src={service.serviceImage.url} />
                <Typography sx={{ padding: "10px" }}>
                  {service.serviceDescription}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default DisplayServicesOffered;

import React from "react";

import { Link } from "react-router-dom";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";

import HeroSkeletonLoading from "../skeletonScreens/HeroLoading";

interface IHeroProps {
  heroData: { data: any; loading: boolean };
}

const Hero = (props: IHeroProps) => {
  const { data, loading } = props.heroData;

  return (
    <>
      {loading ? (
        <HeroSkeletonLoading />
      ) : (
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            minHeight: "500px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "slategray",
            borderRadius: "0",
          }}
        >
          <Container
            sx={{
              paddingTop: { xs: 8 },
              display: { sm: "flex" },
              alignItems: { sm: "center" },
            }}
          >
            <Stack
              sx={{
                alignItems: { xs: "center" },
                padding: { xs: 1 },
              }}
            >
              <Typography variant="h3" sx={{ alignSelf: "flex-start" }}>
                {data.heroSectionCollection?.items[0].heroTitle}
              </Typography>
              <Typography variant="h6">
                {data.heroSectionCollection?.items[0].heroSubTitle}
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/sessions"
                sx={{
                  width: "200px",
                  fontSize: "16px",
                  marginTop: 4,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "darkblue",
                  },
                  backgroundColor: "#000",
                  alignSelf: { sm: "center" },
                }}
              >
                {data.heroSectionCollection?.items[0].heroButtonText}
              </Button>
            </Stack>
            <Stack
              sx={{
                padding: { xs: "10px 10px 30px", sm: 1 },
                flexBasis: { sm: "fit-content" },
              }}
            >
              <img
                src={data.heroSectionCollection?.items[0].heroImage.url}
                alt={data.heroSectionCollection?.items[0].imageAltText}
                className="img-fluid"
              />
            </Stack>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default Hero;

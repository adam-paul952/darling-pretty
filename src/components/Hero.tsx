import React from "react";

import { Link } from "react-router-dom";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";

interface IHeroProps {
  header?: string;
  subtitle?: string;
  buttonText?: string;
  image?: string;
}

const Hero: React.FC<IHeroProps> = (props) => {
  const { header, subtitle, buttonText, image } = props;

  return (
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
          paddingTop: { xs: "62px" },
          display: { sm: "flex" },
          alignItems: { sm: "center" },
        }}
      >
        <Stack
          sx={{
            alignItems: { xs: "center" },
            padding: { xs: "10px 0" },
          }}
        >
          <Typography variant="h3">{header}</Typography>
          <Typography variant="h6">{subtitle}</Typography>
          <Button
            variant="contained"
            component={Link}
            to="/sessions"
            sx={{
              width: "200px",
              fontSize: "16px",
              marginTop: "25px",
              "&:hover": {
                color: "white",
                backgroundColor: "darkblue",
              },
              backgroundColor: "#000",
              alignSelf: { sm: "center" },
            }}
          >
            {buttonText}
          </Button>
        </Stack>
        <Stack
          sx={{
            padding: { xs: "10px 10px 30px", sm: "10px 10px" },
            flexBasis: { sm: "fit-content" },
          }}
        >
          <img
            src={image}
            alt="Darling Pretty Logo"
            className="img-fluid"
            loading="lazy"
          />
        </Stack>
      </Container>
    </Paper>
  );
};

export default Hero;

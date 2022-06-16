import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { heroStyles } from "../styles/styles";
import image from "../images/darling-pretty1.jpg";

const Hero = () => {
  const { heroBox, gridContainer, title, subtitle, largeImage } = heroStyles;
  return (
    <Paper classes={heroBox} sx={{ width: "100%" }}>
      <Grid
        container
        spacing={6}
        classes={gridContainer}
        sx={{
          alignItems: "center",
          textAlign: "left",
          width: "100%",
          marginLeft: "0",
        }}
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Typography variant="h3" classes={title}>
            Let&apos;s scale your business
          </Typography>
          <Typography variant="h6" classes={subtitle}>
            Hire professionals who [..truccated..] we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={image} alt="Darling Pretty Logo" style={largeImage} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;

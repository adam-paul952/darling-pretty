import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { heroStyles } from "../styles/styles";
import image from "../images/darling-pretty1.jpg";

interface IHeroProps {
  header?: string;
  subtitle?: string;
  buttonText?: string;
}

const Hero: React.FC<IHeroProps> = (props) => {
  const { header, subtitle, buttonText } = props;
  const { heroBox, gridContainer, title, largeImage } = heroStyles;
  return (
    <Paper sx={heroBox}>
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h3" classes={title}>
            {header}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
          <Button
            variant="contained"
            href="/sessions"
            sx={{
              width: "200px",
              fontSize: "16px",
              marginTop: "25px",
              "&:hover": {
                color: "white",
                backgroundColor: "darkblue",
              },
              backgroundColor: "#000",
            }}
          >
            {buttonText}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft: { xs: "10px !important" },
            paddingRight: { xs: "10px !important" },
          }}
        >
          <img src={image} alt="Darling Pretty Logo" style={largeImage} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;

import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/Header";

import { useTheme } from "@mui/material/styles";

import Hero from "./components/Hero";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PortraitIcon from "@mui/icons-material/Portrait";
import SchoolIcon from "@mui/icons-material/School";
import PetsIcon from "@mui/icons-material/Pets";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import DiamondIcon from "@mui/icons-material/Diamond";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Footer from "./components/Footer";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// import { Authenticator } from "@aws-amplify/ui-react";

const servicesAvailable = [
  {
    id: 1,
    name: "Family",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <FamilyRestroomIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 2,
    name: "Portrait",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <PortraitIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 3,
    name: "Graduation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <SchoolIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 4,
    name: "Couples & Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <DiamondIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 5,
    name: "Boudoir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <PhotoCameraIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 6,
    name: "Pet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <PetsIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 7,
    name: "Newborn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <ChildFriendlyIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 8,
    name: "Maternity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: <PregnantWomanIcon sx={{ fontSize: 50 }} />,
  },
];

const heroTitle = `Lorem ipsum dolor amet.`;
const heroCaption = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const App: React.FC = () => {
  return (
    <>
      {/* <Authenticator hideSignUp={true}> */}
      <Header title="Darling Pretty Photography" />
      <Hero header={heroTitle} caption={heroCaption} />
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1px",
          paddingTop: "25px",
          backgroundColor: "gainsboro",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "500px",
          }}
        >
          {servicesAvailable.map((service, index) => (
            <Grid
              item
              xs={12}
              md={3}
              minHeight={300}
              key={service.id}
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
                {service.name}
              </Typography>
              {service.thumbnail}
              <Typography sx={{ padding: "10px" }}>
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* </Authenticator> */}
      <Footer />
    </>
  );
};

export default App;

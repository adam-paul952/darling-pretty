import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import DisplaySessions from "./components/DisplaySessions";

import { useTheme } from "@mui/material/styles";
import useSessionInfo, { ISessionInfo } from "./hooks/useSessionInfo";
import moment from "moment";
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// import { Authenticator } from "@aws-amplify/ui-react";

const servicesAvailable = [
  {
    id: 1,
    service: "Family",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 2,
    service: "Portrait",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 3,
    service: "Graduation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 4,
    service: "Couples & Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 5,
    service: "Boudoir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 6,
    service: "Pet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 7,
    service: "Newborn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
  {
    id: 8,
    service: "Maternity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ac placerat vestibulum lectus mauris ultrices eros.",
  },
];

const App: React.FC = () => {
  const { getAllSessions } = useSessionInfo();

  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await getAllSessions();
        const arrangeDate = allSessions
          .sort(
            (a: ISessionInfo, b: ISessionInfo) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .map((session: ISessionInfo) => {
            const date = moment(session.date).format("ddd, MMMM Do YYYY");
            return {
              ...session,
              date: date,
              price: `$${session.price}.00`,
              sessionImage: {
                name: `https://${session.sessionImage.bucket}.s3.amazonaws.com/${session.sessionImage.key}`,
              },
            };
          });

        setSessions(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = servicesAvailable.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      {/* <Authenticator hideSignUp={true}> */}
      <Header title="Darling Pretty Photography" />
      <Hero />
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h6">
            {servicesAvailable[activeStep].service}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {servicesAvailable.map((service, index) => (
            <div key={service.service}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Paper>
                  <p>{service.description}</p>

                  <Button className="CheckButton">
                    Check List of current sessions
                  </Button>
                </Paper>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      {/* <Container className="mt-2 mx-auto flex flex-column items-center">
        <DisplaySessions sessions={sessions} />
      </Container> */}
      {/* </Authenticator> */}
    </>
  );
};

export default App;

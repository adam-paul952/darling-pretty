import React from "react";
import { Box, Button } from "@mui/material";
import Paypal from "./Paypal";
import { getStepContent } from "./checkoutSteps";

interface ICheckoutStepperProps {
  activeStep: any;
  setActiveStep: any;
  clientDetails: any;
  setClientDetails: any;
  session: any;
  setStatus: any;
  stepLength: number;
}

const CheckoutStepper = (props: ICheckoutStepperProps) => {
  const {
    activeStep,
    setActiveStep,
    clientDetails,
    setClientDetails,
    session,
    setStatus,
    stepLength,
  } = props;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      {getStepContent(activeStep, clientDetails, setClientDetails, session)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}
        {activeStep === stepLength - 1 ? (
          <Paypal
            price={session.price!.toString()}
            sessionName={session.name}
            setStatus={setStatus}
          />
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default CheckoutStepper;

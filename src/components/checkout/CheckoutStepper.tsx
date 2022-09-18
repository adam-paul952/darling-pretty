import React from "react";

import { Box, Button } from "@mui/material";
import Paypal from "./Paypal";

import { getStepContent } from "./checkoutSteps";

interface ICheckoutStepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
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

  const disableButton = (step: number, clientDetails: any) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      addressOne,
      city,
      postalCode,
    } = clientDetails;
    if (step === 0) {
      if (!firstName || !lastName || !email || phoneNumber.length < 14) {
        return true;
      }
    } else if (step === 1) {
      if (!addressOne || !city || postalCode.length !== 7) {
        return true;
      }
    } else {
      return false;
    }
  };

  // React.useEffect(() => {
  //   console.log(clientDetails);
  // }, [clientDetails]);

  React.useEffect(() => {
    console.log(clientDetails.postalCode);
  }, [clientDetails.postalCode]);

  return (
    <>
      {getStepContent(activeStep, clientDetails, setClientDetails, session)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1, color: "#000" }}>
            Back
          </Button>
        )}
        {activeStep === stepLength - 1 ? (
          // <Button
          //   onClick={() => {
          //     setStatus({ status: "COMPLETED" });
          //   }}
          // >
          //   Test Client Add
          // </Button>
          <Paypal
            price={session.price!.toString()}
            sessionName={session.name}
            setStatus={setStatus}
          />
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={disableButton(activeStep, clientDetails)}
            sx={{
              mt: 3,
              ml: 1,
              fontSize: "14px",
              "&:hover": {
                color: "white",
                backgroundColor: "darkblue",
              },
              backgroundColor: "#000",
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
};

export default CheckoutStepper;

import React from "react";

import moment from "moment";
import { useLocation } from "react-router-dom";
import {
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import CheckoutStepper from "../components/checkout/CheckoutStepper";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import useSessionInfo, {
  IBookingInfo,
  ISessionInfo,
} from "../hooks/useSessionInfo";
import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";
import { steps } from "../constants/checkout";
import useCheckout from "../hooks/useCheckout";

interface ILocationCheckout {
  clientInfo: IClientInfo;
  session: ISessionInfo;
  sessionTime: Date;
}

const Checkout = () => {
  const { session, sessionTime } = useLocation().state as ILocationCheckout;
  const { updateBookingWithClient } = useSessionInfo();
  const { createNewClient } = useClientInfo();
  const {
    activeStep,
    setActiveStep,
    handleNext,
    clientDetails,
    setClientDetails,
    filterAvailableTimes,
    orderStatus,
    setStatus,
  } = useCheckout();

  const { id, date, availableTimes, bookings, _version } = session;
  const { firstName, lastName } = clientDetails;

  const sessionStartTime = moment(sessionTime).format("HH:mm");
  const dateString = `${sessionTime.toTimeString().slice(0, 5)} ${
    sessionTime.getHours() < 12 ? "AM" : "PM"
  }`;

  const version = _version!;
  const clientName = `${firstName} ${lastName}`;
  const bookingDate = moment(date).format(`DD MMMM YYYY [at ${dateString}]`);

  React.useEffect(() => {
    console.log(orderStatus);
  }, [orderStatus]);

  //Add client to DB to return ID to add with Booking details
  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient({
        ...clientDetails,
        sessionBooked: bookingDate,
      });

      const bookingDetails: IBookingInfo = {
        clientId: newClient.id,
        clientName: clientName,
        startTime: sessionStartTime,
      };

      return bookingDetails;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  // Call update function to DB after successful transaction
  React.useEffect(() => {
    const handleSessionUpdate = async () => {
      if (orderStatus.status === "COMPLETED") {
        try {
          const bookingDetails = await addClientToDatabase();
          await updateBookingWithClient({
            id: id!,
            bookings: [...bookings!, bookingDetails],
            availableTimes: filterAvailableTimes(
              availableTimes!,
              sessionStartTime
            ),
            version: version,
          });
          handleNext();
        } catch (error) {
          console.log(error);
        }
      }
    };

    handleSessionUpdate();
    //eslint-disable-next-line
  }, [orderStatus.status]);

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ my: 4 }}>
        <Paper
          elevation={5}
          sx={{ mt: { xs: 3, md: 10 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    ".Mui-active": { color: "#000" },
                    ".Mui-completed": { color: "#000" },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <OrderConfirmation orderId={orderStatus.orderId} />
            ) : (
              <CheckoutStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                clientDetails={clientDetails}
                setClientDetails={setClientDetails}
                session={session}
                stepLength={steps.length}
                setStatus={setStatus}
              />
            )}
          </>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;

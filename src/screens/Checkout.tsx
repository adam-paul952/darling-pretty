import React from "react";

import Header from "../components/Header";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import useSessionInfo, {
  IBookingInfo,
  ISessionInfo,
} from "../hooks/useSessionInfo";
import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";
import moment from "moment";
import CheckoutStepper from "../components/checkout/CheckoutStepper";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import { initialClientState, steps } from "../constants/checkout";

interface ILocationCheckout {
  clientInfo: IClientInfo;

  session: ISessionInfo;
  sessionTime: Date;
}

const Checkout = () => {
  const { session, sessionTime } = useLocation().state as ILocationCheckout;
  const { updateBookingWithClient } = useSessionInfo();
  const { createNewClient } = useClientInfo();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const [clientDetails, setClientDetails] =
    React.useState<IClientInfo>(initialClientState);

  const { id, date, availableTimes, bookings, _version } = session;
  const { firstName, lastName } = clientDetails;

  // Determine if transaction was completed
  const [orderStatus, setStatus] = React.useState<any>({
    status: "",
    orderId: "",
  });

  const sessionStartTime = moment(sessionTime).format("HH:mm");
  const dateString = `${sessionTime.toTimeString().slice(0, 5)} ${
    sessionTime.getHours() < 12 ? "AM" : "PM"
  }`;

  const version = _version!;
  const clientName = `${firstName} ${lastName}`;
  const bookingDate = moment(date).format(`DD MMMM YYYY [at ${dateString}]`);

  const filterAvailableTimes = (arrayOfAvailableTimes: string[]) => {
    const filtered: string[] = arrayOfAvailableTimes.filter(
      (time) => time !== sessionStartTime
    );

    return filtered;
  };

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
            availableTimes: filterAvailableTimes(availableTimes!),
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
      <Header title="Checkout" />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
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
          </React.Fragment>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;

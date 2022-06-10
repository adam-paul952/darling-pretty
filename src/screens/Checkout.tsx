import React from "react";
// Components
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Paypal from "./Paypal";
// Hooks
import moment from "moment";
import { useLocation } from "react-router-dom";
import useAWSData, { IBookingInfo, IClientInfo } from "../hooks/useAWSData";
// Types
import { LocationProps } from "../screens/Register";
interface ILocationCheckout extends LocationProps {
  clientInfo: IClientInfo;
}

const Checkout = () => {
  const { session, sessionTime, clientInfo } = useLocation()
    .state as ILocationCheckout;
  const { createNewClient, updateBookingWithClient } = useAWSData();

  // Destructure session & client info
  const { id, date, availableTimes, bookings, price, name, _version } = session;
  const { firstName, lastName } = clientInfo;

  // Determine if transaction was completed
  const [isComplete, setComplete] = React.useState<boolean>(false);

  const sessionStartTime = moment(sessionTime).format("HH:mm");
  const isInArray = (element: any) => element === sessionStartTime;

  // Index of Booked Time Slot && current version of Session
  let indexToRemove = availableTimes.findIndex(isInArray);
  let version = _version!;
  let clientName = `${firstName} ${lastName}`;

  //Add client to DB to return ID to add with Booking details
  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient(clientInfo);
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
      if (isComplete) {
        try {
          const bookingDetails = await addClientToDatabase();
          await updateBookingWithClient({
            id: id!,
            bookings: [...bookings!, bookingDetails],
            timeToRemove: indexToRemove,
            version: version,
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleSessionUpdate();
    //eslint-disable-next-line
  }, [isComplete]);

  return (
    <>
      <Header title="Checkout" />
      <Container className="checkout-container">
        <Row className="checkout-row">
          <Col className="my-1">When: {date}</Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">
            What time: {sessionTime.toTimeString().slice(0, 5)}
            {sessionTime.getHours() < 12 ? "AM" : "PM"}
          </Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">Price: {price}</Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">Who: {clientName}</Col>
        </Row>
        <Paypal
          price={price!.toString()}
          sessionName={name}
          isComplete={isComplete}
          setComplete={setComplete}
        />
      </Container>
    </>
  );
};

export default Checkout;

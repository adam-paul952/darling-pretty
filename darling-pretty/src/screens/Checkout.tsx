import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

import { ClientInfoProps } from "../hooks/useSessionInfo";
import Paypal from "./Paypal";

interface LocationState {
  startDate: Date;
  price: string;
  clientInfo: ClientInfoProps;
}

const Checkout = () => {
  const { startDate, price, clientInfo } = useLocation().state as LocationState;
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>When: {startDate.toDateString()}</Col>
          <Col>
            What time: {startDate.getHours() % 12}:{startDate.getMinutes()}
            {startDate.getHours() < 12 ? "AM" : "PM"}
          </Col>
          <Col>Price: {price}</Col>
        </Row>
        <Row>
          <Col>
            Who: {clientInfo.name.firstName} {clientInfo.name.lastName}
          </Col>
        </Row>
      </Container>
      <Button
        onClick={() => {
          const timeString =
            startDate.getHours() + ":" + startDate.getMinutes();
          clientInfo.bookingDetails.sessionDate = startDate.toDateString();
          clientInfo.bookingDetails.sessionTime = timeString.toString();
          console.log(clientInfo);
        }}
      >
        Add Client to DB
      </Button>
      <Paypal />
    </>
  );
};

export default Checkout;

// Components
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import Paypal from "./Paypal";
// Types
import { LocationProps } from "../screens/Register";
import { IClientInfo } from "../hooks/useAWSData";
interface ILocationCheckout extends LocationProps {
  clientInfo: IClientInfo;
}

const Checkout = () => {
  const { session, sessionTime, clientInfo } = useLocation()
    .state as ILocationCheckout;

  return (
    <>
      <Header title="Checkout" />
      <Container className="checkout-container">
        <Row className="checkout-row">
          <Col className="my-1">When: {session.date}</Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">
            What time: {sessionTime.toTimeString().slice(0, 5)}
            {sessionTime.getHours() < 12 ? "AM" : "PM"}
          </Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">Price: {session.price}</Col>
        </Row>
        <Row className="checkout-row">
          <Col className="my-1">
            Who: {clientInfo.firstName} {clientInfo.lastName}
          </Col>
        </Row>
        <Paypal
          price={session.price!.toString()}
          session={session}
          client={clientInfo}
          sessionTime={sessionTime}
        />
      </Container>
    </>
  );
};

export default Checkout;

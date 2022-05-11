// Components
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
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
    <Container
      className="d-flex flex-column justify-content-center w-75"
      style={{ height: "100vh" }}
    >
      <Container className="my-5">
        <Row className="my-1">
          <Col className="d-flex justify-content-center">
            When: {session.date}
          </Col>
        </Row>
        <Row className="my-1">
          <Col className="d-flex justify-content-center">
            What time: {sessionTime.toTimeString().slice(0, 5)}
            {sessionTime.getHours() < 12 ? "AM" : "PM"}
          </Col>
        </Row>
        <Row className="my-1">
          <Col className="d-flex justify-content-center">
            Price: {session.price}
          </Col>
        </Row>
        <Row className="my-1">
          <Col className="d-flex justify-content-center">
            Who: {clientInfo.firstName} {clientInfo.lastName}
          </Col>
        </Row>
      </Container>
      <Button
        className="w-50"
        style={{ alignSelf: "center" }}
        onClick={() => {
          console.log(clientInfo);
        }}
      >
        Add Client to DB
      </Button>
      <Paypal
        price={session.price!.toString()}
        session={session}
        client={clientInfo}
      />
    </Container>
  );
};

export default Checkout;

import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import { ClientInfoProps } from "../hooks/useSessionInfo";

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
    </>
  );
};

export default Checkout;

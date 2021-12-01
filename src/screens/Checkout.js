import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";
import LoginButton from "../components/LoginButton";

import RegisterUser from "./register/Register";
import useSessionInfo from "../utils/useSessionInfo";

const Checkout = () => {
  const { isAuthenticated } = useAuth0();
  const [showRegister, setShowRegister] = useState(false);

  const { sessionDate } = useSessionInfo();

  useEffect(() => {
    console.log(`Session set time is: ${sessionDate}`);
  }, [sessionDate]);

  return (
    <>
      <Header title="Checkout" />
      <Container className="my-3">
        {isAuthenticated ? (
          <Row>
            <Col></Col>
            <Col className="mb-3">
              <Button className="centerButton">Profile</Button>
            </Col>
            <Col></Col>
          </Row>
        ) : (
          <>
            <Row className="d flex">
              <Col></Col>
              <Col className="justify-content-center mb-3">
                <LoginButton />
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
                <p className="centerText">
                  Returning Customer? Log in for faster checkout!
                </p>
              </Col>
              <Col></Col>
            </Row>
          </>
        )}
        <Row>
          <Col></Col>
          <Col className="mb-2">
            <Button
              onClick={() => {
                setShowRegister(!showRegister);
              }}
              className="centerButton"
            >
              Register
            </Button>
          </Col>
          <Col></Col>
        </Row>
        {showRegister && (
          <>
            <RegisterUser />
            <hr />
          </>
        )}
        <SummaryInformation />
        <hr />
        <PaymentMethod />
      </Container>
    </>
  );
};

const SummaryInformation = () => {
  return (
    <>
      <div className="centerItems">
        <h2 className="m-3">Summary</h2>
      </div>
    </>
  );
};

export default Checkout;

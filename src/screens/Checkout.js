import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";
import LoginButton from "../components/LoginButton";

import RegisterUser from "./register/Register";

const Checkout = () => {
  const { isAuthenticated } = useAuth0();
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Header title="Checkout" />
      <div className=" my-3">
        {isAuthenticated ? (
          <Row>
            <Col className="mb-3">
              <Button className="centerButton">Profile</Button>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col className="mb-3">
                <LoginButton />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="centerText">
                  Returning Customer? Log in for faster checkout!
                </p>
              </Col>
            </Row>
          </>
        )}
        <Row>
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
      </div>
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

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";

const Checkout = () => {
  return (
    <>
      <Header title="Checkout" />
      <div className="my-3">
        <Button as={Link} to="/register" className="centerButton">
          Register
        </Button>
        <p className="centerText">
          Returning Customer? Log in for faster checkout!
        </p>
        <Button className="centerButton">Log In</Button>
        <hr />
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

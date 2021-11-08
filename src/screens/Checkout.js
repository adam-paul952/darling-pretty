import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";
import useClientInfo from "../utils/useClientInfo";

const Checkout = () => {
  const { createClientData } = useClientInfo();

  const [clientInfo, setClientInfo] = useState({
    name: { firstName: "", lastName: "" },
    email: "",
    phoneNumber: "",
    billing: {
      address1: "",
      address2: "",
      city: "",
      province: "NL",
      postalCode: "",
      country: "Canada",
    },
  });

  const handleSubmit = () => {
    createClientData(clientInfo);
    console.log(clientInfo);
  };

  return (
    <>
      <Header title="Checkout" />
      <div className="my-3">
        <p className="centerText">
          Returning Customer? Log in for faster checkout!
        </p>
        <Button className="centerButton">Log In</Button>
        <ContactInformation
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
        />
        <hr />
        <ShippingInformation
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
          handleSubmit={handleSubmit}
        />
        <hr />
        <SummaryInformation
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
        />
        <hr />
        <PaymentMethod clientInfo={clientInfo} setClientInfo={setClientInfo} />
      </div>
    </>
  );
};

const ContactInformation = ({ clientInfo, setClientInfo }) => {
  const { firstName, lastName, email, phoneNumber } = clientInfo;
  return (
    <>
      <div className="centerItems">
        <h2 className="m-3">Contact Information</h2>
      </div>
      <Form>
        <Row className="m-3">
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    name: {
                      ...prevState.name,
                      firstName: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    name: {
                      ...prevState.name,
                      lastName: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setClientInfo({
                    ...clientInfo,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Optional"
                value={phoneNumber}
                onChange={(e) => {
                  setClientInfo({ ...clientInfo, phoneNumber: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const ShippingInformation = ({ clientInfo, setClientInfo, handleSubmit }) => {
  const { address1, address2, city, province, postalCode, country } =
    clientInfo;
  return (
    <>
      <div className="centerItems">
        <h2 className="m-3">Shipping</h2>
      </div>
      <Form>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address1}
              onChange={(e) => {
                setClientInfo((prevState) => ({
                  ...prevState,
                  billing: {
                    ...prevState.billing,
                    address1: e.target.value,
                  },
                }));
              }}
            />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={address2}
              onChange={(e) => {
                setClientInfo((prevState) => ({
                  ...prevState,
                  billing: {
                    ...prevState.billing,
                    address2: e.target.value,
                  },
                }));
              }}
            />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => {
                setClientInfo((prevState) => ({
                  ...prevState,
                  billing: {
                    ...prevState.billing,
                    city: e.target.value,
                  },
                }));
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Control
              defaultValue="Newfoundland and Labrador"
              value={province}
              disabled={true}
            />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => {
                setClientInfo((prevState) => ({
                  ...prevState,
                  billing: {
                    ...prevState.billing,
                    postalCode: e.target.value,
                  },
                }));
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              defaultValue="Canada"
              disabled={true}
              value={country}
              onChange={(e) => {
                setClientInfo({ ...clientInfo, country: "Canada" });
              }}
            />
          </Form.Group>
        </Row>
      </Form>
      <Button className="centerButton" onClick={() => handleSubmit()}>
        Submit User Data
      </Button>
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

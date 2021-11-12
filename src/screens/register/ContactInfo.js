import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactInformation = ({ clientInfo, setClientInfo }) => {
  const { firstName, lastName, phoneNumber } = clientInfo;

  const formatPhoneNumber = (value) => {
    if (!value) {
      return value;
    }
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) {
      return phoneNumber;
    }

    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} - ${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneNumberInput = (e) => {
    setClientInfo((prevState) => ({
      ...prevState,
      phoneNumber: formatPhoneNumber(e.target.value),
    }));
  };
  return (
    <>
      <h2 className="m-3">Contact Information</h2>
      <Form>
        <Row>
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
        <Row>
          <Col></Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Optional"
                value={phoneNumber}
                onChange={(e) => {
                  handlePhoneNumberInput(e);
                }}
              />
            </Form.Group>
            {phoneNumber.length < 16 && phoneNumber.length > 0 && (
              <p style={{ color: "red" }}>Invalid Phone Number</p>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Form>
      <Button className="mt-1 centerButton">Next: Adress Information</Button>
    </>
  );
};

export default ContactInformation;

ContactInformation.propTypes = {
  clientInfo: PropTypes.object.isRequired,
  setClientInfo: PropTypes.func.isRequired,
};

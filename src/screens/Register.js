import { useEffect, useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";

import Header from "../components/Header";
import useClientInfo from "../utils/useClientInfo";

const RegisterUser = () => {
  const { createClientData } = useClientInfo();

  const [clientInfo, setClientInfo] = useState({
    login: { email: "", password: "" },
    name: { firstName: "", lastName: "" },
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
  };

  useEffect(() => {
    console.log(clientInfo);
  }, [clientInfo]);
  return (
    <>
      <Header title="Register" />
      <LoginInformation clientInfo={clientInfo} setClientInfo={setClientInfo} />
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
    </>
  );
};

const LoginInformation = ({ clientInfo, setClientInfo }) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { email, password } = clientInfo;
  return (
    <>
      <h2 className="m-3">Login Information</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    login: {
                      ...prevState.login,
                      email: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    login: {
                      ...prevState.login,
                      password: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="passwordConfirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button className="mt-3 centerButton">Next: Personal Information</Button>
    </>
  );
};

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

const ShippingInformation = ({ clientInfo, setClientInfo, handleSubmit }) => {
  const { address1, address2, city, province, postalCode, country } =
    clientInfo;

  const formatPostalCode = (value) => {
    if (!value) {
      return value;
    }
    const postalCodeRegex =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    const postalCode = value.replace(postalCodeRegex, "");

    if (postalCode.length < 2) {
      return postalCode;
    }

    return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 6)}`;
  };

  const handlePostalCodeInput = (e) => {
    setClientInfo((prevState) => ({
      ...prevState,
      billing: {
        ...prevState.billing,
        postalCode: formatPostalCode(e.target.value),
      },
    }));
  };

  return (
    <>
      <h2 className="m-3">Shipping</h2>

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
                handlePostalCodeInput(e);
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

export default RegisterUser;

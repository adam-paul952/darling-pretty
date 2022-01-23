import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import BillingInformation from "./contactInfo/BillingInformation";
import ClientInformation from "./contactInfo/ContactInformation";

interface LocationProps {
  startDate: Date;
  price: string;
}

interface ClientInfoName {
  firstName: string;
  lastName: string;
}

interface ClientInfoContact {
  email: string;
  phoneNumber: string;
}

interface ClientInfoBilling {
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface ClientInfoProps {
  name: ClientInfoName;
  contact: ClientInfoContact;
  billing: ClientInfoBilling;
}

const Register = () => {
  const { startDate, price } = useLocation().state as LocationProps;

  const [clientInfo, setClientInfo] = React.useState<ClientInfoProps>({
    name: { firstName: "", lastName: "" },
    contact: { email: "", phoneNumber: "" },
    billing: {
      address1: "",
      address2: "",
      city: "",
      province: "NL",
      postalCode: "",
      country: "Canada",
    },
  });
  const [showClientContact, setShowClientContact] = React.useState(false);
  const [showClientAddress, setShowClientAddress] = React.useState(false);

  return (
    <>
      <Header title="Confirm Details" />
      <Container className="my-5">
        <Row>
          <Col>When: {startDate.toDateString()}</Col>
          <Col>
            What time: {startDate.getHours()}:{startDate.getMinutes()}
            {startDate.getHours() < 12 ? "AM" : "PM"}
          </Col>
          <Col>Price: {price}</Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="my-3">
          <Col>
            <p>Returning Customer? Log in for faster checkout!</p>
          </Col>
          <Col>
            <Button>Log In</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <p>Create a user account for faster checkout next time</p>
          </Col>
          <Col>
            <Button>Register</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <p>Fill in information</p>
          </Col>
          <Col>
            <Button onClick={() => setShowClientContact(!showClientContact)}>
              Continue to fill in info
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {showClientContact && (
              <ClientInformation
                clientInfo={clientInfo}
                setClientInfo={setClientInfo}
                showClientAddress={showClientAddress}
                setShowClientAddress={setShowClientAddress}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {showClientAddress && (
              <BillingInformation
                clientInfo={clientInfo}
                setClientInfo={setClientInfo}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;

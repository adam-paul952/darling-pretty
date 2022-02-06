import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import BillingInformation from "./contactInfo/BillingInformation";
import ClientInformation from "./contactInfo/ContactInformation";
import ClientInformationStatus from "../components/ClientInformationStatus";

import useSessionInfo from "../hooks/useSessionInfo";

interface LocationProps {
  startDate: Date;
  price: string;
}

const Register = () => {
  const { startDate, price } = useLocation().state as LocationProps;
  const { clientInfo, setClientInfo } = useSessionInfo();

  const [showClientContact, setShowClientContact] = React.useState(false);
  const [showClientAddress, setShowClientAddress] = React.useState(false);
  const [showContactStatus, setShowContactStatus] = React.useState(false);
  const [showAddressStatus, setShowAddressStatus] = React.useState(false);

  return (
    <>
      <Header title="Confirm Details" />
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
          {showClientContact && (
            <Col>
              <ClientInformation
                clientInfo={clientInfo}
                setClientInfo={setClientInfo}
                showClientAddress={showClientAddress}
                setShowClientAddress={setShowClientAddress}
                showContactStatus={showContactStatus}
                setShowContactStatus={setShowContactStatus}
                showClientContact={showClientContact}
                setShowClientContact={setShowClientContact}
              />
            </Col>
          )}
          {showContactStatus && (
            <ClientInformationStatus
              title="Contact Information"
              complete={true}
            />
          )}
        </Row>
        <Row>
          <Col>
            {showClientAddress && (
              <BillingInformation
                clientInfo={clientInfo}
                setClientInfo={setClientInfo}
                showClientAddress={showClientAddress}
                setShowClientAddress={setShowClientAddress}
                showAddressStatus={showAddressStatus}
                setShowAddressStatus={setShowAddressStatus}
                startDate={startDate}
                price={price}
              />
            )}
          </Col>
          {showAddressStatus && (
            <ClientInformationStatus
              title="Billing Information"
              complete={true}
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Register;

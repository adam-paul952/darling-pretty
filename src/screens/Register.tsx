import React from "react";
// Components
import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import ClientInformation from "./contactInfo/ContactInformation";
import BillingInformation from "./contactInfo/BillingInformation";
import ClientInformationStatus from "../components/ClientInformationStatus";
//Hooks
import { useLocation } from "react-router-dom";
// Types
import { IClientInfo, ISessionInfo } from "../hooks/useAWSData";
export interface LocationProps {
  session: ISessionInfo;
  sessionTime: Date;
}
// Initial Client State
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  addressOne: "",
  addressTwo: "",
  city: "",
  postalCode: "",
  province: "Newfoundland and Labrador",
  country: "Canada",
};

const Register = () => {
  const { session, sessionTime } = useLocation().state as LocationProps;

  const [newClient, setNewClient] = React.useState<IClientInfo>(initialState);

  const [showClientContact, setShowClientContact] = React.useState(true);
  const [showClientAddress, setShowClientAddress] = React.useState(false);

  return (
    <>
      <Header title="Confirm Details" />
      <Container className="my-3">
        {showClientContact && (
          <ClientInformation
            newClient={newClient}
            setNewClient={setNewClient}
            showClientAddress={showClientAddress}
            setShowClientAddress={setShowClientAddress}
            showClientContact={showClientContact}
            setShowClientContact={setShowClientContact}
          />
        )}
        {!showClientContact && (
          <ClientInformationStatus title="Contact Information" />
        )}
        {showClientAddress && (
          <BillingInformation
            newClient={newClient}
            setNewClient={setNewClient}
            showClientAddress={showClientAddress}
            setShowClientAddress={setShowClientAddress}
          />
        )}
        {!showClientAddress && !showClientContact && (
          <ClientInformationStatus
            title="Billing Information"
            complete={true}
          />
        )}
        {!showClientAddress && !showClientContact && (
          <Row className="justify-content-end">
            <Button variant="primary">
              <Link
                className="buttonLink"
                to="/checkout"
                state={{
                  session: session,
                  sessionTime: sessionTime,
                  clientInfo: newClient,
                }}
              >
                Continue to Checkout
              </Link>
            </Button>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Register;

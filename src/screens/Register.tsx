import React from "react";
// Components
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button, Row, Col, Container } from "react-bootstrap";
import ClientInformation from "./contactInfo/ContactInformation";
import BillingInformation from "./contactInfo/BillingInformation";
import ClientInformationStatus from "../components/ClientInformationStatus";
//Hooks
import { useLocation } from "react-router-dom";
import { IClientInfo, ISessionInfo } from "../hooks/useAWSData";
// Types
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

  React.useEffect(() => {
    console.log(`New Client from signup: `, newClient);
  }, [newClient]);

  return (
    <>
      <Header title="Confirm Details" />
      <Container className="my-5">
        {/* <Row className="my-3">
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
        </Row> */}
        {/* <Row className="my-3"> */}
        {/* <Col>
            <p>Fill in information</p>
          </Col> */}
        {/* <Col>
            <Button onClick={() => setShowClientContact(!showClientContact)}>
              Continue to fill in info
            </Button>
          </Col> */}
        {/* </Row> */}
        <Row>
          {showClientContact && (
            <Col>
              <ClientInformation
                newClient={newClient}
                setNewClient={setNewClient}
                showClientAddress={showClientAddress}
                setShowClientAddress={setShowClientAddress}
                showClientContact={showClientContact}
                setShowClientContact={setShowClientContact}
              />
            </Col>
          )}
          {!showClientContact && (
            <ClientInformationStatus title="Contact Information" />
          )}
        </Row>
        <Row>
          <Col>
            {showClientAddress && (
              <BillingInformation
                newClient={newClient}
                setNewClient={setNewClient}
                showClientAddress={showClientAddress}
                setShowClientAddress={setShowClientAddress}
              />
            )}
          </Col>
          {!showClientAddress && !showClientContact && (
            <ClientInformationStatus
              title="Billing Information"
              complete={true}
            />
          )}
        </Row>
        {!showClientAddress && !showClientContact && (
          <Row>
            <Button>
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

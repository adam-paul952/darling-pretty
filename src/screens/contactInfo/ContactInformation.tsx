import React from "react";
// Components
import { Button, Col, Form, Row } from "react-bootstrap";
// Hooks
import { IClientInfo } from "../../hooks/useAWSData";
// Helpers
import { formatPhoneNumber } from "../../util/formatStrings";
//Types
export interface IClientInfoProps {
  newClient: IClientInfo;
  setNewClient: React.Dispatch<React.SetStateAction<IClientInfo>>;
  showClientAddress?: boolean;
  setShowClientAddress?: React.Dispatch<React.SetStateAction<boolean>>;
  showClientContact?: boolean;
  setShowClientContact?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientInformation: React.FC<IClientInfoProps> = ({
  newClient,
  setNewClient,
  showClientAddress,
  setShowClientAddress,
  showClientContact,
  setShowClientContact,
}) => {
  const { firstName, lastName, email, phoneNumber } = newClient;

  const handleClick = () => {
    setShowClientAddress!(!showClientAddress);
    setShowClientContact!(!showClientContact);
  };

  return (
    <>
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
                  setNewClient({ ...newClient, firstName: e.target.value });
                }}
              ></Form.Control>
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
                  setNewClient({ ...newClient, lastName: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>E-mail Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => {
                  setNewClient({ ...newClient, email: e.target.value });
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
                  setNewClient({
                    ...newClient,
                    phoneNumber: formatPhoneNumber(e.target.value),
                  });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button className="mt-3" onClick={() => handleClick()}>
        Save Contact Info
      </Button>
    </>
  );
};

export default ClientInformation;

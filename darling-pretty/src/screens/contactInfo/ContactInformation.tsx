import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { ClientInfoProps } from "../../hooks/useSessionInfo";

interface Props {
  clientInfo: ClientInfoProps;
  setClientInfo: React.Dispatch<React.SetStateAction<ClientInfoProps>>;
  showClientAddress: boolean;
  setShowClientAddress: React.Dispatch<React.SetStateAction<boolean>>;
  showClientContact: boolean;
  setShowClientContact: React.Dispatch<React.SetStateAction<boolean>>;
  showContactStatus: boolean;
  setShowContactStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientInformation: React.FC<Props> = ({
  clientInfo,
  setClientInfo,
  showClientAddress,
  setShowClientAddress,
  showClientContact,
  setShowClientContact,
  showContactStatus,
  setShowContactStatus,
}) => {
  const { name, contact } = clientInfo;

  const handleClick = () => {
    setShowClientAddress(!showClientAddress);
    setShowClientContact(!showClientContact);
    setShowContactStatus(!showContactStatus);
  };

  const formatPhoneNumber = (value: string) => {
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
    )}-${phoneNumber.slice(6, 10)}`;
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
                value={name.firstName}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    name: {
                      ...prevState.name,
                      firstName: e.target.value,
                    },
                  }));
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
                value={name.lastName}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    name: {
                      ...prevState.name,
                      lastName: e.target.value,
                    },
                  }));
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
                value={contact.email}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    contact: {
                      ...prevState.contact,
                      email: e.target.value,
                    },
                  }));
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
                value={contact.phoneNumber}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    contact: {
                      ...prevState.contact,
                      phoneNumber: formatPhoneNumber(e.target.value),
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button onClick={() => handleClick()}>Save Contact Info</Button>
    </>
  );
};

export default ClientInformation;

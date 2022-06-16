import React from "react";
// Components
import { Button, Col, Form, Row } from "react-bootstrap";
import RequiredAsterisk from "../../components/visual/RequiredAsterisk";
// Hooks
import { IClientInfo } from "../../hooks/useClientInfo";
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

const ClientInformation: React.FC<IClientInfoProps> = (props) => {
  const { firstName, lastName, email, phoneNumber } = props.newClient;

  const handleClick = () => {
    props.setShowClientAddress!(!props.showClientAddress);
    props.setShowClientContact!(!props.showClientContact);
  };

  return (
    <>
      <Form className="my-5">
        <Row lg={2} className="justify-content-around">
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>
                First Name <RequiredAsterisk />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  props.setNewClient({
                    ...props.newClient,
                    firstName: e.target.value,
                  });
                }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>
                Last Name <RequiredAsterisk />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  props.setNewClient({
                    ...props.newClient,
                    lastName: e.target.value,
                  });
                }}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col>
            <Form.Group controlId="email">
              <Form.Label>
                E-mail <RequiredAsterisk />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail Address"
                value={email}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  props.setNewClient({
                    ...props.newClient,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>
                Phone Number <RequiredAsterisk />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="(555)555-5555"
                value={phoneNumber}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  props.setNewClient({
                    ...props.newClient,
                    phoneNumber: formatPhoneNumber(e.target.value),
                  });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="justify-content-end">
        <Button
          variant="primary"
          className="w-25"
          onClick={() => handleClick()}
          disabled={!firstName || !lastName || !email || !phoneNumber}
        >
          Save Contact Info
        </Button>
      </Row>
    </>
  );
};

export default ClientInformation;

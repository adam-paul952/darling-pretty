import React from "react";
// Components
import { Button, Col, Form, Row } from "react-bootstrap";
// Types
import { IClientInfoProps } from "./ContactInformation";
interface IBillingInfoProps extends IClientInfoProps {}

const BillingInformation: React.FC<IBillingInfoProps> = ({
  newClient,
  setNewClient,
  showClientAddress,
  setShowClientAddress,
}) => {
  const {
    addressOne,
    addressTwo,
    city,
    postalCode,
    // province,
    // country
  } = newClient;

  const handleClick = () => {
    setShowClientAddress!(!showClientAddress);
  };

  return (
    <Form>
      <Row className="m-3">
        <Form.Group as={Col} controlId="address1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={addressOne}
            onChange={(e) => {
              setNewClient({
                ...newClient,
                addressOne: e.target.value,
              });
            }}
          />
        </Form.Group>
      </Row>
      <Row className="m-3">
        <Form.Group as={Col} controlId="address2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apartment, studio, or floor"
            value={addressTwo!}
            onChange={(e) => {
              setNewClient({
                ...newClient,
                addressTwo: e.target.value,
              });
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
              setNewClient({
                ...newClient,
                city: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="province">
          <Form.Label>Province</Form.Label>
          <Form.Control value="Newfoundland and Labrador" disabled={true} />
        </Form.Group>
      </Row>

      <Row className="m-3">
        <Form.Group as={Col} controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => {
              setNewClient({
                ...newClient,
                postalCode: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control disabled={true} value="Canada" />
        </Form.Group>
      </Row>
      <Button onClick={() => handleClick()}>Complete Billing Info Input</Button>
    </Form>
  );
};

export default BillingInformation;

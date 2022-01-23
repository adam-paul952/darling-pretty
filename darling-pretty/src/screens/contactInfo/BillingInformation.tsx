import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { ClientInfoProps } from "../Register";

interface Props {
  clientInfo: ClientInfoProps;
  setClientInfo: React.Dispatch<React.SetStateAction<ClientInfoProps>>;
}

const BillingInformation: React.FC<Props> = ({ clientInfo, setClientInfo }) => {
  const { billing } = clientInfo;
  return (
    <>
      <Form>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={billing.address1}
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
              value={billing.address2}
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
              value={billing.city}
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
            <Form.Control value={billing.province} disabled={true} />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={billing.postalCode}
              onChange={(e) => {
                setClientInfo((prevState) => ({
                  ...prevState,
                  billing: {
                    ...prevState.billing,
                    postalCode: e.target.value,
                  },
                }));
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control disabled={true} value={billing.country} />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default BillingInformation;

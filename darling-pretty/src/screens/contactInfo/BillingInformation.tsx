import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

import { ClientInfoProps } from "../../hooks/useSessionInfo";

interface Props {
  clientInfo: ClientInfoProps;
  setClientInfo: React.Dispatch<React.SetStateAction<ClientInfoProps>>;
  showClientAddress: boolean;
  setShowClientAddress: React.Dispatch<React.SetStateAction<boolean>>;
  showAddressStatus: boolean;
  setShowAddressStatus: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date;
  price: string;
  sessionLength: number;
}

const BillingInformation: React.FC<Props> = ({
  clientInfo,
  setClientInfo,
  showClientAddress,
  setShowClientAddress,
  showAddressStatus,
  setShowAddressStatus,
  startDate,
  price,
  sessionLength,
}) => {
  const { billing } = clientInfo;
  const handleClick = () => {
    setShowClientAddress(!showClientAddress);
    setShowAddressStatus(!showAddressStatus);
  };
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
      <Button onClick={() => handleClick()}>
        <Link
          className="buttonLink"
          to="/checkout"
          state={{
            startDate: startDate,
            price: price,
            clientInfo: clientInfo,
            sessionLength: sessionLength,
          }}
        >
          Continue to Checkout
        </Link>
      </Button>
    </>
  );
};

export default BillingInformation;

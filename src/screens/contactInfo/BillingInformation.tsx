import React from "react";
// Components
import { Button, Col, Form, Row } from "react-bootstrap";
import RequiredAsterisk from "../../components/visual/RequiredAsterisk";
// Types
import { IClientInfoProps } from "./ContactInformation";
// interface IBillingInfoProps extends IClientInfoProps {}

const BillingInformation: React.FC<IClientInfoProps> = (props) => {
  const {
    addressOne,
    addressTwo,
    city,
    postalCode,
    // province,
    // country
  } = props.newClient;

  const handleClick = () => {
    props.setShowClientAddress!(!props.showClientAddress);
  };

  return (
    <>
      <Form className="my-5">
        <Row className="justify-content-around">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>
              Address <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={addressOne}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setNewClient({
                  ...props.newClient,
                  addressOne: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
              value={addressTwo!}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setNewClient({
                  ...props.newClient,
                  addressTwo: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-around">
          <Form.Group as={Col} controlId="city">
            <Form.Label>
              City <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              value={city}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setNewClient({
                  ...props.newClient,
                  city: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="province">
            <Form.Label>
              Province <RequiredAsterisk />
            </Form.Label>
            <Form.Control value="Newfoundland and Labrador" disabled={true} />
          </Form.Group>
        </Row>
        <Row className="justify-content-around">
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>
              Postal Code <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              value={postalCode}
              placeholder="A1A1A1"
              required
              onChange={(e: any) => {
                props.setNewClient({
                  ...props.newClient,
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
      </Form>
      <Row className="justify-content-end">
        <Button
          variant="primary"
          onClick={() => handleClick()}
          disabled={!addressOne || !city || !postalCode}
        >
          Save Billing Info
        </Button>
      </Row>
    </>
  );
};

export default BillingInformation;

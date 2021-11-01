import { Col, Form, Row } from "react-bootstrap";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";

const Checkout = () => {
  return (
    <>
      <Header title="Checkout" />
      <div className="my-3">
        <ContactInformation />
        <hr />
        <ShippingInformation />
        <hr />
        <SummaryInformation />
        <hr />
        <PaymentMethod />
      </div>
    </>
  );
};

const ContactInformation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 className="m-3">Contact Information</h2>
      </div>
      <Form>
        <Row className="m-3">
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Optional" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const ShippingInformation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 className="m-3">Shipping</h2>
      </div>
      <Form>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Control as="select">
              <option>Newfoundland and Labrador</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control defaultValue="Canada" disabled={true} />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

const SummaryInformation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 className="m-3">Summary</h2>
      </div>
    </>
  );
};

export default Checkout;

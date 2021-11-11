import { Button, Col, Form, Row } from "react-bootstrap";

const ShippingInformation = ({ clientInfo, setClientInfo, handleSubmit }) => {
  const { address1, address2, city, province, postalCode, country } =
    clientInfo;

  const formatPostalCode = (value) => {
    if (!value) {
      return value;
    }
    const postalCodeRegex =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    const postalCode = value.replace(postalCodeRegex, "");

    if (postalCode.length < 2) {
      return postalCode;
    }

    return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 6)}`;
  };

  const handlePostalCodeInput = (e) => {
    setClientInfo((prevState) => ({
      ...prevState,
      billing: {
        ...prevState.billing,
        postalCode: formatPostalCode(e.target.value),
      },
    }));
  };

  return (
    <>
      <h2 className="m-3">Shipping</h2>

      <Form>
        <Row className="m-3">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address1}
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
              value={address2}
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
              value={city}
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
            <Form.Control
              defaultValue="Newfoundland and Labrador"
              value={province}
              disabled={true}
            />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => {
                handlePostalCodeInput(e);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              defaultValue="Canada"
              disabled={true}
              value={country}
              onChange={(e) => {
                setClientInfo({ ...clientInfo, country: "Canada" });
              }}
            />
          </Form.Group>
        </Row>
      </Form>
      <Button className="centerButton" onClick={() => handleSubmit()}>
        Submit User Data
      </Button>
    </>
  );
};

export default ShippingInformation;

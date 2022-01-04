import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="mt-5">
        <Row style={{ height: "60%" }}>
          <Col
            style={{ backgroundImage: "/darling-pretty1.jpg" }}
            className="darlingPrettyBackground"
          ></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="d-grid gap-2">
            <Button
              variant="primary"
              as={Link}
              to="/darling_pretty_photo"
              size="lg"
            >
              Darling Pretty Photography
            </Button>
          </Col>
          <Col className="d-grid gap-2">
            <Button
              variant="primary"
              as={Link}
              to="/pawparazzi_photo"
              size="lg"
            >
              Pawparazzi Photography
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

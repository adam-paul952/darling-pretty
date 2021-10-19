import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container style={{ marginTop: "15rem", marginLeft: "10rem" }}>
        <Row>
          <Col>
            <Button variant="primary" as={Link} to="/darling_pretty_photo">
              Darling Pretty Photography
            </Button>
          </Col>
          <Col>
            <Button variant="primary" as={Link} to="/pawparazzi_photo">
              Pawparazzi Photography
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

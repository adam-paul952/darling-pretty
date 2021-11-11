import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container
        style={{
          margin: "10px",
          maxWidth: "100%",
          maxHeight: "100%",
          height: "90%",
          marginTop: "60px",
        }}
      >
        <Row style={{ height: "100%" }}>
          <Col
            style={{
              backgroundImage: "url(darling-pretty1.jpg)",
              backgroundSize: "100% 100%",
              width: "50%",
              height: "90%",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              marginRight: "1px",
            }}
          >
            <Button
              style={{
                marginTop: "100%",
                width: "100%",
                height: "3rem",
              }}
              variant="primary"
              as={Link}
              to="/darling_pretty_photo"
            >
              Darling Pretty Photography
            </Button>
          </Col>
          <Col
            style={{
              backgroundImage: "url(darling-pretty.jpg)",
              backgroundSize: "100% 100%",
              width: "50%",
              height: "90%",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              marginLeft: "1px",
            }}
          >
            <Button
              style={{
                marginTop: "100%",
                width: "100%",
                height: "3rem",
              }}
              variant="primary"
              as={Link}
              to="/pawparazzi_photo"
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

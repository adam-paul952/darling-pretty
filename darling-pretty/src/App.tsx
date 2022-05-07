import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

import { sessionInfo } from "./util/sessionInfo";
import darlingPretty from "./images/darling-pretty1.jpg";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <Container className="mt-3">
        <ShowAvailablePhotos />
      </Container>
    </>
  );
};

const ShowAvailablePhotos = () => {
  return (
    <>
      {sessionInfo.map((session) => {
        return (
          <Row key={session.id} className="row-cols-2 justify-content-center">
            <CardGroup>
              <Col className="mb-4">
                <Card>
                  <Card.Link as={Link} to={`/photo/${session.id}`}>
                    <Card.Img
                      variant="top"
                      src={darlingPretty}
                      alt="Darling Pretty Logo"
                    />
                  </Card.Link>
                  <Card.Body>
                    <Card.Title>{session.sessionName}</Card.Title>
                    <Card.Text>{session.date}</Card.Text>
                    <hr />
                    <Card.Text>{session.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Row>
        );
      })}
    </>
  );
};

export default App;

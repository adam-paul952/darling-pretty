import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

// import { sessionInfo } from "../sessionInfo/sessionInfo";

const DarlingPrettyHome = ({ sessionInfo }) => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <Container className="mt-3">
        <ShowAvailablePhotos sessionInfo={sessionInfo} />
      </Container>
    </>
  );
};

DarlingPrettyHome.propTypes = {
  sessionInfo: PropTypes.array.isRequired,
};

const ShowAvailablePhotos = ({ sessionInfo }) => {
  return (
    <>
      {sessionInfo.map((session) => {
        return (
          <Row key={session.id} className="row-cols-2 justify-content-center">
            <CardGroup>
              <Col className="mb-4">
                <Card>
                  <Card.Link
                    as={Link}
                    to={`/darling_pretty_photodesc/${session.id}`}
                  >
                    <Card.Img variant="top" src="darling-pretty1.jpg" />
                  </Card.Link>
                  <Card.Body>
                    <Card.Title>{session.sessionName}</Card.Title>
                    <Card.Text>{session.date}</Card.Text>
                    <hr />
                    <Card.Text>$XXX.xx</Card.Text>
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

ShowAvailablePhotos.propTypes = {
  sessionInfo: PropTypes.array.isRequired,
};

export default DarlingPrettyHome;

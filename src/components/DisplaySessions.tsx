import React from "react";

import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

import { ISessionInfo } from "../hooks/useSessionInfo";
interface IDisplaySessionsProps {
  sessions: ISessionInfo[];
}

const DisplaySessions: React.FC<IDisplaySessionsProps> = (props) => {
  const { sessions } = props;

  return (
    <>
      {sessions.map((session: ISessionInfo) => {
        return (
          <Row key={session.id} lg={2} className="justify-content-center">
            <CardGroup>
              <Col className="mb-4">
                <Card className="photoCard">
                  <Card.Link
                    as={Link}
                    to={`/photo/${session.id}`}
                    state={{ session: session }}
                  >
                    <Card.Img
                      variant="top"
                      className="photoCardImage"
                      src={session.sessionImage.name}
                      alt="Darling Pretty Logo"
                    />
                  </Card.Link>
                  <Card.Body>
                    <Card.Title>{session.name}</Card.Title>
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

export default DisplaySessions;

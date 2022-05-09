import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

import { sessionInfo } from "./util/sessionInfo";
import darlingPretty from "./images/darling-pretty1.jpg";
import { getYear, getMonth, getDay } from "date-fns";

import Header from "./components/Header";

import useAWSDatastore from "./hooks/useAWSData";

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
  const [sessions, setSessions] = React.useState<any>([]);
  const { listAllSessions } = useAWSDatastore();

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await listAllSessions();
        const testDate = allSessions.map((session: any) => {
          const date = session.date.split("-").map(Number);
          //   const start = parseInt(session.startTime.slice(0, 2), 10);
          const startDateString = new Date(date[0], date[1] - 1, date[2])
            .toString()
            .slice(0, 15);
          //   const end = parseInt(session.endTime.slice(0, 2), 10);
          //   const endDateString = new Date(date[0], date[1], date[2], end);
          //   // console.log(endDateString);
          return {
            ...session,
            date: startDateString,
            price: `$${session.price}.00`,
            //     title: session.name,
            //     date: new Date(date[0], date[1], date[2]),
            //     // start: startDateString,
            //     // end: endDateString,
          };
        });
        setSessions(testDate);
        // setSessions(allSessions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
  }, []);

  React.useEffect(() => {
    console.log(sessions);
  }, [sessions]);

  return (
    <>
      {sessions.map((session: any) => {
        return (
          <Row key={session.id} className="row-cols-2 justify-content-center">
            <CardGroup>
              <Col className="mb-4">
                <Card>
                  <Card.Link
                    as={Link}
                    to={`/photo/${session.id}`}
                    state={{ session: session }}
                  >
                    <Card.Img
                      variant="top"
                      src={darlingPretty}
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

export default App;

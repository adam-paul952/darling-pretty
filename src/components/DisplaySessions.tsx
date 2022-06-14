import React from "react";
// Components
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
// Hooks
import useAWSDatastore, { ISessionInfo } from "../hooks/useAWSData";
import { addDays } from "date-fns";

const ShowAvailablePhotos = () => {
  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);
  const { listAllSessions } = useAWSDatastore();

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await listAllSessions();
        const arrangeDate = allSessions
          .map((session: any) => {
            const date = addDays(new Date(session.date), 1)
              .toString()
              .slice(0, 15)
              .replace(" ", ", ");
            return {
              ...session,
              date: date,
              price: `$${session.price}.00`,
              sessionImage: `https://${session.sessionImage.bucket}.s3.amazonaws.com/${session.sessionImage.key}`,
            };
          })
          .sort(
            (a: ISessionInfo, b: ISessionInfo) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        setSessions(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {sessions.map((session: any) => {
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
                      src={session.sessionImage}
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

export default ShowAvailablePhotos;

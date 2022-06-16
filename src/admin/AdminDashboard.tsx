import React from "react";

import { Link } from "react-router-dom";
import { Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import SideNav from "./components/SideNav";

import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";
import moment from "moment";

const AdminDashboard = () => {
  const { getAllSessions } = useSessionInfo();

  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const formatDate = React.useCallback((date) => {
    const formattedDate = moment(date).format("MMMM DD YYYY");
    return formattedDate;
  }, []);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await getAllSessions();
        setSessions(allSessions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard-container">
      <SideNav />
      <Container>
        <h3>Current Sessions:</h3>
        <Row lg={4} sm={2}>
          {!loading && sessions.length > 0 ? (
            sessions.map((session: ISessionInfo) => {
              return (
                <CardGroup key={session.id}>
                  <Card as={Col} className="dashboard-session-card">
                    <Card.Link
                      as={Link}
                      to="/admin/createsession"
                      state={{ sessionId: session.id }}
                    >
                      <h5>{session.name}</h5>
                      <p>{formatDate(session.date)}</p>
                      <p>
                        Available Sessions: {session.availableTimes!.length}
                      </p>
                      <p>Booked Sessions: {session.bookings!.length}</p>
                      <p>Start Time: {session.startTime}</p>
                      <p>End Time: {session.endTime}</p>
                    </Card.Link>
                  </Card>
                </CardGroup>
              );
            })
          ) : (
            <Container fluid>
              <h3>No Sessions Found..</h3>
            </Container>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;

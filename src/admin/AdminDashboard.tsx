import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import SideNav from "./components/SideNav";
import useAWSDatastore, { ISessionInfo } from "../hooks/useAWSData";

const AdminDashboard = () => {
  const { listAllSessions } = useAWSDatastore();

  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await listAllSessions();
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
  React.useEffect(() => {
    console.log(sessions);
  }, [sessions]);
  return (
    <>
      <SideNav />
      <Container>
        <h3>Current Sessions:</h3>
        <Row>
          {!loading && sessions.length > 0 ? (
            sessions.map((session: ISessionInfo) => {
              return (
                <Col key={session.id}>
                  <Link
                    to="/admin/createsession"
                    state={{ sessionId: session.id }}
                  >
                    <h5>{session.name}</h5>
                    <p>{session.date}</p>
                    <p>Available Sessions: {session.availableTimes.length}</p>
                    <p>Booked Sessions: {session.bookings!.length}</p>
                    <p>Start Time: {session.startTime}</p>
                    <p>End Time: {session.endTime}</p>
                  </Link>
                </Col>
              );
            })
          ) : (
            <Container fluid>
              <h3>No Sessions Found..</h3>
            </Container>
          )}
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;

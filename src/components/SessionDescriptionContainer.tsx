import React from "react";
//Router
import { Link } from "react-router-dom";
//Components
import { Button, Container, Col, Row } from "react-bootstrap";
import ShowAvailableTime from "../components/Calendar";
// Images
import darlingPretty from "../images/darling-pretty1.jpg";
// Date FNS
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
//Types
import { ISessionInfo } from "../hooks/useAWSData";
interface Session {
  session: ISessionInfo;
  setSessionDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  setStartDate?: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
}

const SessionInfo: React.FC<Session> = ({ session, setSessionDate }) => {
  const startHour: number = parseInt(
    session.startTime.slice(0, 2).padStart(2, "0"),
    10
  );
  const startMinute: number = parseInt(session.startTime.slice(3, 5), 10);
  const [startDate, setStartDate] = React.useState<Date>(
    setHours(setMinutes(new Date(session.date), startMinute), startHour)
  );

  return (
    <Container key={session.id}>
      <img
        className="float_left"
        src={darlingPretty}
        alt="Darling-Pretty logo"
        width="450"
        height="350"
      />
      <h2>Price</h2>
      <p>{session.price}</p>
      <hr />
      <h3>Date</h3>
      <p>{session.date}</p>
      <hr />
      <h2>Session Includes:</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: session.sessionDetails,
        }}
      />
      <hr />
      <Row>
        <Col className="d-flex justify-content-end">
          <p>Available Times:</p>
        </Col>
        <Col>
          <ShowAvailableTime
            key={session.id}
            session={session}
            setSessionDate={setSessionDate}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </Col>
        <Col>
          <Button>
            <Link
              className="buttonLink"
              to="/register"
              state={{
                session: session,
                sessionTime: startDate,
              }}
            >
              Add to Cart
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SessionInfo;

import React from "react";
//Router
import { Link } from "react-router-dom";
//Components
import { Button, Col, Container, Row } from "react-bootstrap";
import ShowAvailableTime from "../components/Calendar";
// Images
import darlingPretty from "../images/darling-pretty1.jpg";
// Date FNS
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import DOMPurify from "dompurify";
//Types
import { ISessionInfo } from "../hooks/useAWSData";
interface ISessionInfoProps {
  session: ISessionInfo;
  setStartDate?: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
}

const SessionInfo: React.FC<ISessionInfoProps> = (props) => {
  const startHour: number = parseInt(
    props.session.availableTimes[0].slice(0, 2).padStart(2, "0"),
    10
  );
  const startMinute: number = parseInt(
    props.session.availableTimes[0].slice(3, 5),
    10
  );
  const [startDate, setStartDate] = React.useState<Date>(
    setHours(setMinutes(new Date(props.session.date), startMinute), startHour)
  );

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(props.session.sessionDetails),
  });

  return (
    <Container key={props.session.id} className="mt-2 pt-2">
      <Row lg={2} className="mt-2 pt-2">
        <Col className="">
          <img
            className="img-fluid"
            src={darlingPretty}
            alt="Darling-Pretty logo"
          />
        </Col>
        <Col className="align-self-center">
          <h2>Price</h2>
          <p>{props.session.price}</p>
          <hr className="w-25" />
          <h3>Date</h3>
          <p>{props.session.date}</p>
        </Col>
      </Row>
      <hr />
      <Row lg={2} className="">
        <Col className="px-1">
          <h2>Session Includes:</h2>
          <div dangerouslySetInnerHTML={sanitizeData()} />
        </Col>
        <Col lg={3} className="mx-auto">
          <p>Available Times:</p>
          <ShowAvailableTime
            key={props.session.id}
            session={props.session}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          <Link
            className="buttonLink"
            to="/register"
            state={{
              session: props.session,
              sessionTime: startDate,
            }}
          >
            <Button variant="primary" className="w-100">
              Add to Cart
            </Button>
          </Link>
        </Col>
        {/* <hr className="w-100" /> */}
      </Row>
    </Container>
  );
};

export default SessionInfo;

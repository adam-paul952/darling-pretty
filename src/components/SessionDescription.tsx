import React from "react";

import { Link } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ShowAvailableTime from "./ShowAvailableTime";

import moment from "moment";

import DOMPurify from "dompurify";

import { ISessionInfo } from "../hooks/useSessionInfo";
interface ISessionDescriptionProps {
  session: ISessionInfo;
}

const SessionDescription: React.FC<ISessionDescriptionProps> = (props) => {
  const { session } = props;

  const dateString = moment(
    `${session.date}T${session.availableTimes![0]}`,
    "ddd, MMMM Do YYYYTHH:mm"
  ).toDate();

  const [startDate, setStartDate] = React.useState<Date>(dateString);

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(session.sessionDetails),
  });

  return (
    <Container key={session.id} className="mt-4 pt-4">
      <Row lg={2} className="mt-2 pt-2">
        <Col>
          <Image
            fluid
            src={session.sessionImage.name}
            alt="Darling-Pretty logo"
          />
        </Col>
        <Col className="align-self-center">
          <h2>Price</h2>
          <p>{session.price}</p>
          <hr className="w-25" />
          <h3>Date</h3>
          <p>{session.date}</p>
        </Col>
      </Row>
      <hr />
      <Row lg={2} md={1}>
        <Col className="px-1">
          <h2>Session Includes:</h2>
          <div dangerouslySetInnerHTML={sanitizeData()} />
        </Col>
        <Col lg={3} className="available-time-container">
          <p>Available Times:</p>
          <ShowAvailableTime
            session={session}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          <Link
            className="buttonLink"
            to="/register"
            state={{
              session: session,
              sessionTime: startDate,
            }}
          >
            <Button variant="primary" className="w-100">
              Add to Cart
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SessionDescription;

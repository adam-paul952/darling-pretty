import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const EditSessionInfo = () => {
  const [date, setDate] = React.useState<string>("");
  const [startHour, setStartHour] = React.useState<string>("");
  const [startMinute, setStartMinute] = React.useState<string>("");
  const [numberOfSessions, setNumberOfSessions] = React.useState<string>("");
  const [lengthOfSessions, setLengthOfSessions] = React.useState<string>("");
  const [sessionName, setSessionName] = React.useState<string>("");
  const [sessionInfo, setSessionInfo] = React.useState<string>("");
  const [sessionPrice, setSessionPrice] = React.useState<string>("");
  const [sessionDetails, setSessionDetails] = React.useState<string>("");

  return (
    <>
      <Form>
        <Row className="m-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder="MM DD, YY" value={date} />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} controlId="startHour">
            <Form.Label>Start Hour</Form.Label>
            <Form.Control placeholder="8" value={startHour} />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="startMiniute">
            <Form.Label>StartMinute</Form.Label>
            <Form.Control value={startMinute} />
          </Form.Group>
          <Form.Group as={Col} controlId="numberOfSessions">
            <Form.Label>Number of Sessions</Form.Label>
            <Form.Control value={numberOfSessions} />
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} controlId="lengthOfSessions">
            <Form.Label>Length Of Sessions</Form.Label>
            <Form.Control value={lengthOfSessions} />
          </Form.Group>

          <Form.Group as={Col} controlId="sessionName">
            <Form.Label>Session Name</Form.Label>
            <Form.Control value={sessionName} />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} controlId="sessionInfo">
            <Form.Label>Session Info</Form.Label>
            <Form.Control value={sessionInfo} />
          </Form.Group>

          <Form.Group as={Col} controlId="sessionPrice">
            <Form.Label>Session Price</Form.Label>
            <Form.Control value={sessionPrice} />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} controlId="sessionDetails">
            <Form.Label>Session Details</Form.Label>
            <Form.Control value={sessionDetails} />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default EditSessionInfo;

import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const EditSessionInfo = () => {
  const [date, setDate] = React.useState<string>("");
  const [startTime, setStartHour] = React.useState<string>("");
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
          <Form.Group as={Col} controlId="startTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control placeholder="8:00" value={startTime} />
          </Form.Group>
        </Row>

        <Row className="m-3">
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

      <Button>Add Session</Button>
    </>
  );
};

export default EditSessionInfo;

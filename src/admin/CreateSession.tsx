import React from "react";
// Components
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// Hooks
import useAWSDatastore from "../hooks/useAWSData";
import { parseDateTime } from "../util/parseDate";

const CreateSessionScreen = () => {
  const { createNewSession } = useAWSDatastore();
  // States
  const [date, setDate] = React.useState<string>("");
  const [startTime, setStartTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");
  const [lengthOfSessions, setLengthOfSessions] = React.useState<number>(0);
  const [sessionName, setSessionName] = React.useState<string>("");
  const [sessionInfo, setSessionInfo] = React.useState<string>("");
  const [sessionPrice, setSessionPrice] = React.useState<number>();
  const [sessionDetails, setSessionDetails] = React.useState<string>("");
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const [saving, setSaving] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [success, setSuccess] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const onHandleSubmit = async () => {
    const availableSessions = { date, startTime, endTime, lengthOfSessions };
    try {
      const bookings = await parseDateTime(availableSessions);
      const newSession = {
        date: date,
        startTime: startTime,
        endTime: endTime,
        sessionLength: lengthOfSessions,
        name: sessionName,
        sessionInfo: sessionInfo,
        price: sessionPrice,
        sessionDetails: sessionDetails,
        availableTimes: bookings,
      };
      await createNewSession(newSession);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <p>Create Session</p>
        </Row>
      </Container>
      <Container>
        <Form>
          <Row className="m-3">
            <Form.Group as={Col} controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                placeholder="YYYY-MM-DD"
                value={date}
                disabled={saving}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group as={Col} controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                placeholder="08:00"
                value={startTime}
                disabled={saving}
                onChange={(event) => {
                  setStartTime(event.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Row className="m-3">
            <Form.Group as={Col} controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                placeholder="14:00"
                value={endTime}
                disabled={saving}
                onChange={(event) => {
                  setEndTime(event.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Row className="m-3">
            <Form.Group as={Col} controlId="lengthOfSessions">
              <Form.Label>Length Of Sessions</Form.Label>
              <Form.Control
                placeholder="30"
                value={lengthOfSessions}
                disabled={saving}
                onChange={(event) =>
                  setLengthOfSessions(parseInt(event.target.value, 10))
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="sessionName">
              <Form.Label>Session Name</Form.Label>
              <Form.Control
                placeholder="Family Photos"
                value={sessionName}
                disabled={saving}
                onChange={(event) => setSessionName(event.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group as={Col} controlId="sessionInfo">
              <Form.Label>Session Info</Form.Label>
              <Form.Control
                placeholder=""
                value={sessionInfo}
                disabled={saving}
                onChange={(event) => setSessionInfo(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="sessionPrice">
              <Form.Label>Session Price</Form.Label>
              <Form.Control
                placeholder="150"
                value={sessionPrice}
                disabled={saving}
                onChange={(event) => {
                  setSessionPrice(parseInt(event.target.value, 10));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group controlId="sessionDetails">
              <Form.Label>Session Details</Form.Label>
              <Editor
                editorState={editorState}
                wrapperClassName="editor"
                editorClassName="card-body"
                onEditorStateChange={(newState: any) => {
                  setEditorState(newState);
                  setSessionDetails(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                }}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Container>
        <Row className="m-3">
          <Button onClick={() => onHandleSubmit()}>Create New Session</Button>
        </Row>
      </Container>
    </>
  );
};

export default CreateSessionScreen;

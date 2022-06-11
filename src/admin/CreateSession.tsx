import React from "react";
// Components
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideNav from "./components/SideNav";
// Hooks
import useAWSDatastore from "../hooks/useAWSData";
import { parseDateTime } from "../util/parseDate";
// Types
interface ICreateSessionLocation {
  sessionId: string | null;
}
interface ICreateSessionProps {}

const CreateSessionScreen: React.FC<ICreateSessionProps> = (props) => {
  const { sessionId } = useLocation().state as ICreateSessionLocation;
  const { createNewSession, getSessionById } = useAWSDatastore();
  // Session Input States
  const [_id, setId] = React.useState<string | undefined>("");
  const [date, setDate] = React.useState<string>("");
  const [startTime, setStartTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");
  const [lengthOfSessions, setLengthOfSessions] = React.useState<number>(0);
  const [sessionName, setSessionName] = React.useState<string>("");
  const [sessionInfo, setSessionInfo] = React.useState<string>("");
  const [sessionPrice, setSessionPrice] = React.useState<number>(0);
  const [sessionDetails, setSessionDetails] = React.useState<string>("");
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const checkForEdit = async () => {
      if (!sessionId) {
        setId("");
        setLoading(false);
      } else {
        const session = await getSessionById(sessionId);
        setId(session.id);
        setDate(session.date);
        setStartTime(session.startTime);
        setEndTime(session.endTime);
        setLengthOfSessions(session.sessionLength);
        setSessionName(session.name);
        setSessionPrice(session.price);
        setSessionInfo(session.sessionInfo);
        // Convert HTML string to draft
        const contentBlock = htmlToDraft(session.sessionDetails);
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);

        setEditorState(editorState);
      }
    };
    checkForEdit();
    // es-link-disable-next-line
  }, []);

  const onCreateSession = async () => {
    const availableSessions = { date, startTime, endTime, lengthOfSessions };
    try {
      const availableBookings = await parseDateTime(availableSessions);
      const newSession = {
        date: date,
        startTime: startTime,
        endTime: endTime,
        sessionLength: lengthOfSessions,
        name: sessionName,
        sessionInfo: sessionInfo,
        price: sessionPrice,
        sessionDetails: sessionDetails,
        availableTimes: availableBookings,
      };
      await createNewSession(newSession);
      setId("");
      setDate("");
      setStartTime("");
      setEndTime("");
      setLengthOfSessions(0);
      setSessionName("");
      setSessionPrice(0);
      setSessionInfo("");
      setEditorState(EditorState.createEmpty());
    } catch (error: any) {
      console.log(error);
    }
  };

  const onEditSession = async () => {};

  return (
    <Container className="dashboard-container">
      <SideNav />
      <Container className="d-flex justify-content-center">
        <Row>{_id ? <p>Edit Session</p> : <p>Create Session</p>}</Row>
      </Container>
      <>
        <Form>
          <Row className="m-3">
            <Form.Group as={Col} controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                placeholder="YYYY-MM-DD"
                value={date}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDate(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="sessionName">
              <Form.Label>Session Name</Form.Label>
              <Form.Control
                placeholder="Family Photos"
                value={sessionName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionName(event.target.value)
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="sessionPrice">
              <Form.Label>Session Price</Form.Label>
              <Form.Control
                placeholder="150"
                value={sessionPrice}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSessionPrice(parseInt(event.target.value, 10));
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStartTime(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                placeholder="14:00"
                value={endTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEndTime(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lengthOfSessions">
              <Form.Label>Length Of Sessions</Form.Label>
              <Form.Control
                placeholder="30"
                value={lengthOfSessions}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLengthOfSessions(parseInt(event.target.value, 10))
                }
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group as={Col} controlId="sessionInfo">
              <Form.Label>Session Info</Form.Label>
              <Form.Control
                placeholder="This gets displayed on Paypal Sale"
                value={sessionInfo}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionInfo(event.target.value)
                }
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group controlId="sessionDetails">
              <Form.Label>Session Details</Form.Label>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="editor-wrapper"
                editorClassName="editor"
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
      </>
      <Container>
        <Row className="m-3 justify-content-end">
          {_id ? (
            <Button onClick={() => onEditSession()}>Edit Session</Button>
          ) : (
            <Button onClick={() => onCreateSession()}>
              Create New Session
            </Button>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default CreateSessionScreen;

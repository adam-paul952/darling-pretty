import React from "react";
// Components
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideNav from "./components/SideNav";
// Hooks
import useAWSDatastore from "../hooks/useAWSData";
import { parseDateTime } from "../util/parseDate";
import moment from "moment";
// Types
interface ICreateSessionLocation {
  sessionId: string | null;
}
type ImageDetailsT = {
  name: string;
  mimeType: string;
};

const CreateSessionScreen: React.FC = () => {
  const { sessionId } = useLocation().state as ICreateSessionLocation;
  const { createNewSession, getSessionById, adminUpateSession } =
    useAWSDatastore();
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
  const [imageName, setImageName] = React.useState<string>("");
  const [sessionImage, setSessionImage] = React.useState<ImageDetailsT>({
    name: "",
    mimeType: "",
  });
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const [imagePreview, setImagePreview] = React.useState<any>("");

  const [loading, setLoading] = React.useState<boolean>(true);

  const formattedDate = moment(date).format("YYYY-MM-DD");
  const availableSessions = {
    formattedDate,
    startTime,
    endTime,
    lengthOfSessions,
  };

  const assignSessionImage = () => {
    const { name, mimeType } = sessionImage;
    if (imageName === "") {
      return { name, mimeType };
    } else {
      return { name: imageName, mimeType };
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview(URL.createObjectURL(event.target.files![0]));
    setSessionImage({
      name: event.target.files![0].name,
      mimeType: event.target.files![0].type,
    });
  };

  const onCreateSession = async () => {
    const availableBookings = parseDateTime(availableSessions);
    try {
      const sessionData = {
        date: formattedDate,
        startTime: startTime,
        endTime: endTime,
        sessionLength: lengthOfSessions,
        name: sessionName,
        sessionInfo: sessionInfo,
        price: sessionPrice,
        sessionDetails: sessionDetails,
        sessionImage: assignSessionImage(),
        availableTimes: availableBookings,
      };
      await createNewSession(sessionData);
      resetFormData();
      alert("Session created successfully");
    } catch (error: any) {
      console.log(error);
    }
  };

  const onEditSession = async () => {
    return null;
  };

  const resetFormData = () => {
    setId("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setLengthOfSessions(0);
    setSessionName("");
    setSessionPrice(0);
    setSessionInfo("");
    setImageName("");
    setSessionImage({ name: "", mimeType: "" });
    setEditorState(EditorState.createEmpty());
  };

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
    // eslint-disable-next-line
  }, []);

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
          <Row className="m-3" style={{ alignItems: "center" }}>
            <Form.Group as={Col} controlId="imageName">
              <Form.Label>Image Name</Form.Label>
              <Form.Control
                placeholder=""
                value={imageName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setImageName(event.target.value);
                }}
              />
            </Form.Group>
            {sessionImage && (
              <Col>
                <Image src={imagePreview} thumbnail fluid />
              </Col>
            )}
            <Form.Group as={Col} controlId="sessionImage">
              <Form.Label>Session Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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

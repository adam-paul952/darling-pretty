import React from "react";

import { useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideNav from "./components/SideNav";

import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";
import { parseDateTime } from "../util/parseDate";
import moment from "moment";

interface ICreateSessionLocation {
  sessionId: string | null;
}

const initialSessionState = {
  id: "",
  date: "",
  startTime: "",
  endTime: "",
  sessionLength: 0,
  name: "",
  sessionInfo: "",
  price: 0,
  sessionDetails: "",
  sessionImage: {
    name: "",
    size: 0,
    type: "",
    lastModified: 0,
  },
};

const CreateSessionScreen: React.FC = () => {
  const { sessionId } = useLocation().state as ICreateSessionLocation;
  const { createNewSession, getSessionById, adminUpateSession } =
    useSessionInfo();

  const [sessionDetails, setSessionDetails] =
    React.useState<ISessionInfo>(initialSessionState);

  const { startTime, endTime, sessionLength } = sessionDetails;
  const formattedDate = moment(sessionDetails.date).format("YYYY-MM-DD");

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const [imageName, setImageName] = React.useState<string>("");
  const [imagePreview, setImagePreview] = React.useState<any>("");

  const [loading, setLoading] = React.useState<boolean>(true);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview(URL.createObjectURL(event.target.files![0]));
    setSessionDetails({
      ...sessionDetails,
      sessionImage: event.target.files![0],
    });
  };

  const onCreateSession = async () => {
    const availableBookings = parseDateTime({
      formattedDate,
      startTime,
      endTime,
      sessionLength,
    });
    try {
      const sessionData = {
        ...sessionDetails,
        date: formattedDate,
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
    setSessionDetails(initialSessionState);
    setImagePreview("");
    setEditorState(EditorState.createEmpty());
  };

  React.useEffect(() => {
    const checkForEdit = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      } else {
        const session = await getSessionById(sessionId);
        const { bucket, key } = session.sessionImage;

        setSessionDetails(session);
        setImagePreview(`https://${bucket}.s3.amazonaws.com/${key}`);
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
        <Row>{sessionId ? <p>Edit Session</p> : <p>Create Session</p>}</Row>
      </Container>
      <>
        <Form>
          <Row className="m-3">
            <Form.Group as={Col} controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                placeholder="YYYY-MM-DD"
                value={sessionDetails.date}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSessionDetails({
                    ...sessionDetails,
                    date: event.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="sessionName">
              <Form.Label>Session Name</Form.Label>
              <Form.Control
                placeholder="Family Photos"
                value={sessionDetails.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionDetails({
                    ...sessionDetails,
                    name: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="sessionPrice">
              <Form.Label>Session Price</Form.Label>
              <Form.Control
                placeholder="150"
                value={sessionDetails.price}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSessionDetails({
                    ...sessionDetails,
                    price: parseInt(event.target.value, 10),
                  });
                }}
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group as={Col} controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                placeholder="08:00"
                value={sessionDetails.startTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSessionDetails({
                    ...sessionDetails,
                    startTime: event.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                placeholder="14:00"
                value={sessionDetails.endTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSessionDetails({
                    ...sessionDetails,
                    endTime: event.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lengthOfSessions">
              <Form.Label>Length Of Sessions</Form.Label>
              <Form.Control
                placeholder="30"
                value={sessionDetails.sessionLength}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionDetails({
                    ...sessionDetails,
                    sessionLength: parseInt(event.target.value, 10),
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <Form.Group as={Col} controlId="sessionInfo">
              <Form.Label>Session Info</Form.Label>
              <Form.Control
                placeholder="This gets displayed on Paypal Sale"
                value={sessionDetails.sessionInfo}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionDetails({
                    ...sessionDetails,
                    sessionInfo: event.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row className="m-3" style={{ alignItems: "center" }}>
            <Form.Group as={Col} controlId="selectSessionImage">
              <Form.Label>Select Image</Form.Label>
              <Form.Select aria-label="Session picture dropdown">
                <option>Open to select previously uploaded photo</option>
              </Form.Select>
            </Form.Group>
            {sessionDetails.sessionImage && (
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
                  setSessionDetails({
                    ...sessionDetails,
                    sessionDetails: draftToHtml(
                      convertToRaw(newState.getCurrentContent())
                    ),
                  });
                }}
              />
            </Form.Group>
          </Row>
        </Form>
      </>
      <Container>
        <Row className="m-3 justify-content-end">
          {sessionId ? (
            <Button disabled onClick={() => onEditSession()}>
              Edit Session
            </Button>
          ) : (
            <Button disabled onClick={() => onCreateSession()}>
              Create New Session
            </Button>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default CreateSessionScreen;

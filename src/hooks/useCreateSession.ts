import React from "react";

import moment from "moment";
import htmlToDraft from "html-to-draftjs";

import useSessionInfo, { ISessionInfo } from "./useSessionInfo";
import { EditorState, ContentState, convertToRaw } from "draft-js";

const useCreateSession = () => {
  const {
    createNewSession,
    getSessionById,
    // adminUpateSession,
    getAvailableBookings,
  } = useSessionInfo();

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

  const [isLoading, setLoading] = React.useState<boolean>(true);

  const [sessionDetails, setSessionDetails] =
    React.useState<ISessionInfo>(initialSessionState);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const [imagePreview, setImagePreview] = React.useState<any>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview(URL.createObjectURL(event.target.files![0]));
    setSessionDetails({
      ...sessionDetails,
      sessionImage: event.target.files![0],
    });
  };

  const onCreateSession = async () => {
    const availableBookings = getAvailableBookings(
      sessionDetails.startTime,
      sessionDetails.endTime,
      sessionDetails.sessionLength
    );
    try {
      const sessionData = {
        ...sessionDetails,
        date: moment(sessionDetails.date).format("YYYY-MM-DD"),
        startTime: moment(sessionDetails.startTime).format("h:mm:ss A"),
        endTime: moment(sessionDetails.endTime).format("h:mm:ss A"),
        availableTimes: availableBookings,
      };
      await createNewSession(sessionData);
      resetFormData();
      alert("Session created successfully");
    } catch (error: any) {
      console.log(error);
      alert(error);
    }
  };

  const checkForEdit = async (sessionId: string | null) => {
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

  const onEditSession = async () => {
    return null;
  };

  const resetFormData = () => {
    setSessionDetails(initialSessionState);
    setImagePreview("");
    setEditorState(EditorState.createEmpty());
  };

  return {
    sessionDetails,
    setSessionDetails,
    editorState,
    setEditorState,
    handleImageChange,
    imagePreview,
    setImagePreview,
    onCreateSession,
    checkForEdit,
    onEditSession,
    isLoading,
  };
};

export default useCreateSession;

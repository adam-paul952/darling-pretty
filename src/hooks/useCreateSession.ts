import React from "react";

import moment from "moment";
import htmlToDraft from "html-to-draftjs";

import useSessionInfo, { ISessionInfo } from "./useSessionInfo";
import { EditorState, ContentState } from "draft-js";

import useImageStorage from "../hooks/useImageStorage";

const initialSessionState = {
  id: "",
  date: "",
  startTime: null,
  endTime: null,
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

const useCreateSession = () => {
  const {
    createNewSession,
    getSessionById,
    adminUpateSession,
    getAvailableBookings,
  } = useSessionInfo();

  const { listStorageItems } = useImageStorage();

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
    const sessionData = {
      ...sessionDetails,
      date: moment(sessionDetails.date).format("YYYY-MM-DD"),
      startTime: moment(sessionDetails.startTime).format("h:mm:ss A"),
      endTime: moment(sessionDetails.endTime).format("h:mm:ss A"),
      availableTimes: availableBookings,
    };
    try {
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
      console.log(session);
      setSessionDetails({
        ...session,
        startTime: moment(session.startTime, "h:mm:ss A"),
        endTime: moment(session.endTime, "h:mm:ss A"),
      });
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
    // format available times to make sure previous booked sessions are still unavailable in timepicker
    const availableBookings = getAvailableBookings(
      sessionDetails.startTime,
      sessionDetails.endTime,
      sessionDetails.sessionLength,
      sessionDetails.bookings
    );
    // ensure session properties are formatted correctly
    const sessionData = {
      ...sessionDetails,
      date: moment(sessionDetails.date).format("YYYY-MM-DD"),
      startTime: moment(sessionDetails.startTime).format("h:mm:ss A"),
      endTime: moment(sessionDetails.endTime).format("h:mm:ss A"),
      availableTimes: availableBookings,
    };
    // remove AWS timestamp properties
    delete sessionData.createdAt;
    delete sessionData.updatedAt;

    try {
      await adminUpateSession(sessionData);
      console.log(`Session updated successfully`);
      alert(`Session successfully updated`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const resetFormData = () => {
    setSessionDetails(initialSessionState);
    setImagePreview("");
    setEditorState(EditorState.createEmpty());
  };

  const [listOfImages, setListOfImages] = React.useState<any>([]);

  const listItemsFromStorage = async () => {
    const items = await listStorageItems();
    setListOfImages(items);
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
    listItemsFromStorage,
    listOfImages,
  };
};

export default useCreateSession;

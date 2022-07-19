import React from "react";

import { useLocation } from "react-router-dom";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import useImageStorage from "../hooks/useImageStorage";
import useCreateSession from "../hooks/useCreateSession";

interface ICreateSessionLocation {
  sessionId: string | null;
}

const CreateSessionScreen: React.FC = () => {
  const { listStorageItems } = useImageStorage();
  const { sessionId } = useLocation().state as ICreateSessionLocation;

  const {
    sessionDetails,
    setSessionDetails,
    editorState,
    setEditorState,
    handleImageChange,
    imagePreview,
    onCreateSession,
    checkForEdit,
    onEditSession,
  } = useCreateSession();

  React.useEffect(() => {
    checkForEdit(sessionId);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const listItemsFromStorage = async () => {
      const items = await listStorageItems();
      console.log(items);
    };
    listItemsFromStorage();
    // eslint-disable-next-line
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            height: "inherit",
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginTop: "70px" }}
          >
            {sessionId ? "Edit Session" : "Create Session"}
          </Typography>
          <Box component="form">
            <Stack
              direction="row"
              spacing={12}
              sx={{ justifyContent: "center", padding: "15px 0" }}
            >
              <FormControl>
                <DatePicker
                  label="Session Date"
                  inputFormat="YYYY-MM-DD"
                  disableMaskedInput
                  value={sessionDetails.date}
                  onChange={(newValue: any) => {
                    setSessionDetails({
                      ...sessionDetails,
                      date: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} error={false} />
                  )}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Session Name"
                  variant="outlined"
                  value={sessionDetails.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSessionDetails({
                      ...sessionDetails,
                      name: event.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Session Price"
                  variant="outlined"
                  value={sessionDetails.price === 0 ? "" : sessionDetails.price}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSessionDetails({
                      ...sessionDetails,
                      price: parseInt(event.target.value, 10),
                    });
                  }}
                />
              </FormControl>
            </Stack>
            <Stack
              direction="row"
              spacing={10}
              sx={{ justifyContent: "center", padding: "15px 0" }}
            >
              <FormControl>
                <TimePicker
                  label="Start Time"
                  value={sessionDetails.startTime}
                  onChange={(newValue: any) => {
                    setSessionDetails({
                      ...sessionDetails,
                      startTime: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} error={false} />
                  )}
                />
              </FormControl>
              <FormControl>
                <TimePicker
                  label="End Time"
                  value={sessionDetails.endTime}
                  onChange={(newValue: any) => {
                    setSessionDetails({
                      ...sessionDetails,
                      endTime: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} error={false} />
                  )}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Length of Sessions"
                  variant="outlined"
                  value={
                    sessionDetails.sessionLength === 0
                      ? ""
                      : sessionDetails.sessionLength
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSessionDetails({
                      ...sessionDetails,
                      sessionLength: parseInt(event.target.value, 10),
                    })
                  }
                />
              </FormControl>
            </Stack>
            <Stack
              direction="row"
              spacing={10}
              sx={{ justifyContent: "center", padding: "15px 0" }}
            >
              {sessionDetails.sessionImage && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  loading="lazy"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              )}

              <Button
                variant="contained"
                component="label"
                sx={{
                  maxHeight: { md: "56px" },
                  minWidth: { md: "127.4px" },
                  alignSelf: { md: "center" },
                }}
              >
                Upload File
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <TextField
                id="outlined-basic"
                label="Session Info"
                variant="outlined"
                value={sessionDetails.sessionInfo}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSessionDetails({
                    ...sessionDetails,
                    sessionInfo: event.target.value,
                  })
                }
              />
            </Stack>
            <Stack>
              <InputLabel>Session Details:</InputLabel>
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
            </Stack>
          </Box>
          <Button
            variant="contained"
            // disabled
            onClick={
              sessionId ? () => onEditSession() : () => onCreateSession()
            }
            sx={{ margin: "20px 0" }}
          >
            {sessionId ? "Edit Session" : "Create New Session"}
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateSessionScreen;

/* 
  TODO: Upload Image button is fluid when image is uplaoded
*/

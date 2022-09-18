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
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers";

import useCreateSession from "../hooks/useCreateSession";

interface ICreateSessionLocation {
  sessionId: string | null;
}

const CreateSessionScreen: React.FC = () => {
  const { sessionId } = useLocation().state as ICreateSessionLocation;

  const {
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
    listItemsFromStorage,
    listOfImages,
  } = useCreateSession();

  const [dropdownText, setDropdownText] = React.useState<string>(
    "Previously Uploaded Images"
  );

  const handleSelectChange = (event: SelectChangeEvent) => {
    setImagePreview(event.target.value);
    setDropdownText(event.target.value);
  };

  React.useEffect(() => {
    checkForEdit(sessionId);
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
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginTop: "75px" }}
          >
            {sessionId ? "Edit Session" : "Create Session"}
          </Typography>
          <Box component="form">
            <Stack
              direction="row"
              spacing={12}
              sx={{
                justifyContent: "space-between",
                py: 2,
                width: "81%",
                mx: "auto",
              }}
            >
              <FormControl sx={{ width: "30%" }}>
                <DatePicker
                  label="Session Date"
                  inputFormat="YYYY-MM-DD"
                  disableMaskedInput
                  value={sessionDetails.date}
                  onChange={(newValue: any) => {
                    setSessionDetails((prev) => ({
                      ...prev,
                      date: newValue,
                    }));
                  }}
                  renderInput={(params) => (
                    <TextField {...params} error={false} />
                  )}
                />
              </FormControl>
              <FormControl sx={{ width: "30%" }}>
                <TextField
                  id="outlined-basic"
                  label="Session Name"
                  variant="outlined"
                  value={sessionDetails.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSessionDetails((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl sx={{ width: "30%" }}>
                <TextField
                  id="outlined-basic"
                  label="Session Price"
                  variant="outlined"
                  value={sessionDetails.price === 0 ? "" : sessionDetails.price}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSessionDetails((prev) => ({
                      ...prev,
                      price: parseInt(event.target.value, 10),
                    }));
                  }}
                />
              </FormControl>
            </Stack>
            <Stack
              direction="row"
              spacing={12}
              sx={{
                justifyContent: "space-between",
                py: 2,
                mx: "auto",
                width: "81%",
              }}
            >
              <FormControl sx={{ width: "30%" }}>
                <MobileTimePicker
                  label="Start Time"
                  value={sessionDetails.startTime}
                  onChange={(newValue: string | null) => {
                    setSessionDetails((prev) => ({
                      ...prev,
                      startTime: newValue,
                    }));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minutesStep={15}
                  closeOnSelect
                />
              </FormControl>
              <FormControl sx={{ width: "30%" }}>
                <MobileTimePicker
                  label="End Time"
                  value={sessionDetails.endTime}
                  onChange={(newValue: string | null) =>
                    setSessionDetails((prev) => ({
                      ...prev,
                      endTime: newValue,
                    }))
                  }
                  renderInput={(params) => (
                    <TextField {...params} error={false} />
                  )}
                  minutesStep={15}
                  closeOnSelect
                />
              </FormControl>
              <FormControl sx={{ width: "30%" }}>
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
                    setSessionDetails((prev) => ({
                      ...prev,
                      sessionLength: parseInt(event.target.value, 10),
                    }))
                  }
                />
              </FormControl>
            </Stack>
            <Stack
              direction="row"
              spacing={12}
              sx={{
                justifyContent: "space-between",
                py: 2,
                width: "81%",
                mx: "auto",
                alignItems: "center",
                minHeight: "199px",
              }}
            >
              <Box
                sx={{
                  minWidth: "250px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {sessionDetails.sessionImage && (
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    loading="lazy"
                    className="img-fluid"
                    style={{ maxWidth: "250px" }}
                  />
                )}
              </Box>
              <Stack direction="column" spacing={1} sx={{ width: "30%" }}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    maxHeight: { md: "56px" },
                    minWidth: { md: "127.4px" },
                    alignSelf: { md: "center" },
                    m: 1,
                    fontSize: "16px",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "darkblue",
                    },
                    backgroundColor: "#000",
                  }}
                >
                  Upload File
                  <input type="file" hidden onChange={handleImageChange} />
                </Button>
                <Typography sx={{ textAlign: "center" }}>-- OR --</Typography>
                <Select
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Image"
                  value={dropdownText}
                  displayEmpty
                  variant="outlined"
                  onChange={handleSelectChange}
                >
                  <MenuItem disabled value={dropdownText}>
                    Previously Uploaded Images
                  </MenuItem>
                  {listOfImages.length > 0 &&
                    listOfImages.map((image: any) => {
                      return (
                        <MenuItem key={image.key} value={image.url}>
                          {image.key}
                        </MenuItem>
                      );
                    })}
                </Select>
              </Stack>
              <FormControl sx={{ width: "30%" }}>
                <TextField
                  id="outlined-basic"
                  label="Session Info"
                  variant="outlined"
                  value={sessionDetails.sessionInfo}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSessionDetails((prev) => ({
                      ...prev,
                      sessionInfo: event.target.value,
                    }))
                  }
                />
              </FormControl>
            </Stack>
            <Stack>
              <InputLabel sx={{ width: { sm: "81%" }, mx: { sm: "auto" } }}>
                Session Details:
              </InputLabel>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="editor-wrapper"
                editorClassName="editor"
                onEditorStateChange={(newState: any) => {
                  setEditorState(newState);
                  setSessionDetails((prev) => ({
                    ...prev,
                    sessionDetails: draftToHtml(
                      convertToRaw(newState.getCurrentContent())
                    ),
                  }));
                }}
              />
            </Stack>
          </Box>
          <Box sx={{ width: { sm: "81%" }, mx: { sm: "auto" } }}>
            <Button
              variant="contained"
              // disabled
              onClick={
                sessionId ? () => onEditSession() : () => onCreateSession()
              }
              sx={{
                margin: "20px 0",
                fontSize: "16px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "darkblue",
                },
                backgroundColor: "#000",
              }}
            >
              {sessionId ? "Edit Session" : "Create New Session"}
            </Button>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateSessionScreen;

/* 
  TODO: Upload Image button is fluid when image is uplaoded
*/

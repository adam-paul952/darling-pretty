import React from "react";
// Components
import ReCAPTCHAV2 from "react-google-recaptcha";
import Header from "../components/Header";
import SubmissionComplete from "../components/visual/ContactSuccessMessage";
import {
  Container,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
// Hooks
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const { sendContactForm } = useContactForm();

  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const [token, setToken] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleToken = async (token: string | null) => {
    token ? setToken(true) : setToken(false);
  };

  const handleExpireToken = () => {
    setToken(false);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    await sendContactForm({ name, email, subject, message });
    setSuccess(true);
  };

  React.useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [success]);

  return (
    <Container sx={{}}>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          padding: "12px",
          maxWidth: "755px",
          margin: "6px auto 12px",
          backgroundColor: "gainsboro",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Reach out with any questions or comments!
        </Typography>
        <Box
          sx={{ marginTop: "30px", display: "flex", flexDirection: "column" }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Full Name"
            placeholder="John Doe"
            variant="standard"
            // fullWidth
            required
            sx={{
              marginBottom: "20px !important",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75%",
            }}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            label="Email"
            variant="standard"
            required
            sx={{
              marginBottom: "20px !important",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75%",
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            value={email}
          />

          <TextField
            label="Subject"
            variant="standard"
            required
            sx={{
              marginBottom: "20px !important",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75%",
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSubject(e.target.value);
            }}
            value={subject}
          />

          <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            required
            placeholder="Enter a message"
            style={{
              marginBottom: "20px",
              fontSize: "16px",
              padding: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75%",
            }}
            spellCheck
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          {!success ? (
            <Container
              sx={{
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 !important",
              }}
            >
              <ReCAPTCHAV2
                className="my-1"
                sitekey={process.env.REACT_APP_SITE_KEY!}
                onChange={handleToken}
                onExpired={handleExpireToken}
              />
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{ width: "200px", fontSize: "16px" }}
                onClick={handleSubmit}
                disabled={!token}
              >
                Submit
              </Button>
            </Container>
          ) : (
            <SubmissionComplete />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;

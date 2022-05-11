import React from "react";
// Components
import { Button, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHAV2 from "react-google-recaptcha";
import Header from "../components/Header";
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

  const handleSubmit = async () => {
    await sendContactForm({ name, email, subject, message });
    console.log(`
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`);
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
    <>
      <Header title="Contact" />
      <Container className="my-4">
        <Row>
          <h3 style={{ textAlign: "center" }}>
            Reach out with any questions or comments!
          </h3>
        </Row>
      </Container>
      <Container className="mt-3" style={{ width: "75%" }}>
        <Form className="m-3">
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactSubject"
          >
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactMessage"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
          </Form.Group>
          {!success ? (
            <Container className="d-flex flex-column align-items-center">
              <ReCAPTCHAV2
                className="my-1"
                sitekey={process.env.REACT_APP_SITE_KEY!}
                onChange={handleToken}
                onExpired={handleExpireToken}
              />
              <Button
                className="mt-2"
                style={{ width: "36.5%" }}
                disabled={!token}
                onClick={() => handleSubmit()}
              >
                Send Message
              </Button>
            </Container>
          ) : (
            <SubmissionComplete />
          )}
        </Form>
      </Container>
    </>
  );
};

export default ContactForm;

const SubmissionComplete = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <h2>Thanks for your submission, someone will be in touch soon!</h2>
    </Container>
  );
};

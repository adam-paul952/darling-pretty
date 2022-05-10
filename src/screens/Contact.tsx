import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import useContactForm from "../hooks/useContactForm";
import ReCAPTCHAV2 from "react-google-recaptcha";

import Header from "../components/Header";

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

  return (
    <>
      <Header title="Contact" />
      <Container className="mt-3">
        <Form className="m-3">
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
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
          <Form.Group className="mb-3" controlId="contactSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
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
            <>
              <ReCAPTCHAV2
                sitekey={process.env.REACT_APP_SITE_KEY!}
                onChange={handleToken}
                onExpired={handleExpireToken}
              />
              <Button disabled={!token} onClick={() => handleSubmit()}>
                Send Message
              </Button>
            </>
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

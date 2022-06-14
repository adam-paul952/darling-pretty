import React from "react";
// Components
import ReCAPTCHAV2 from "react-google-recaptcha";
import Header from "../components/Header";
import { Button, Container, Form, Row } from "react-bootstrap";
import SubmissionComplete from "../components/visual/ContactSuccessMessage";
// Hooks
import useContactForm from "../hooks/useContactForm";
import RequiredAsterisk from "../components/visual/RequiredAsterisk";

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
    <>
      <Header title="Contact" />
      <Container>
        <Row className="margin-top-5">
          <h3 className="text-center">
            Reach out with any questions or comments!
          </h3>
        </Row>
        <Form className="contact-form-container">
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactName"
          >
            <Form.Label>
              Name <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactEmail"
          >
            <Form.Label>
              Email <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="john.doe@email.com"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactSubject"
          >
            <Form.Label>
              Subject <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 contact-form-input"
            controlId="contactMessage"
          >
            <Form.Label>
              Message <RequiredAsterisk />
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Type your message here..."
              required
              rows={3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
          </Form.Group>
          {!success ? (
            <Container className="col-center">
              <ReCAPTCHAV2
                className="my-1"
                sitekey={process.env.REACT_APP_SITE_KEY!}
                onChange={handleToken}
                onExpired={handleExpireToken}
              />
              <Button
                className="align-self-center"
                onClick={handleSubmit}
                disabled={!token}
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

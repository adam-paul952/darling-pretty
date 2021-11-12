import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import Header from "../components/Header";
import useContactForm from "../utils/useContactForm";

const Contact = () => {
  const { sendContactForm } = useContactForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactForm({ name, email, subject, message });
    console.log(`
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
      `);
  };

  return (
    <>
      <Header title="Contact" />
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
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
        <Button type="submit">Send Message</Button>
      </Form>
    </>
  );
};

export default Contact;

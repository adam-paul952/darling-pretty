import { Button, Form } from "react-bootstrap";

import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header title="Contact" />
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="contactname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactsubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactmessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Send Message</Button>
      </Form>
    </>
  );
};

export default Contact;

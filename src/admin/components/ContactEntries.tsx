import React from "react";

import { Accordion, Col, Row } from "react-bootstrap";

import useContactForm, { IContactFormProps } from "../../hooks/useContactForm";

interface IContactEntriesProps {
  contactEntries: IContactFormProps[];
}

const ContactEntries: React.FC<IContactEntriesProps> = (props) => {
  const { contactEntries } = props;

  const { deleteContactFormSubmission } = useContactForm();

  const emailSubject = `Response to Inquiry from Darling Pretty Photography`;

  const removeEntry = async (id: string) => {
    await deleteContactFormSubmission(id);
  };

  return (
    <Accordion style={{ marginTop: "10%" }}>
      {contactEntries.map((entry) => {
        return (
          <Accordion.Item key={entry.id} eventKey={entry.id!}>
            <Accordion.Header>
              <Row style={{ width: "100%" }}>
                <Col>{entry.name}</Col>
                <Col>{entry.email}</Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
              <Row style={{ margin: "5px 5px" }}>Subject: {entry.subject}</Row>
              <Row style={{ margin: "5px 5px" }}>Message: {entry.message}</Row>
              <Row style={{ marginLeft: "25%" }}>
                <Col>
                  <a href={`mailto:${entry.email}?subject=${emailSubject}`}>
                    Reply
                  </a>
                </Col>
                <Col>
                  <a
                    href="#"
                    style={{ color: "red" }}
                    // onClick={() => {
                    //   removeEntry(entry.id);
                    // }}
                  >
                    Delete
                  </a>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default ContactEntries;

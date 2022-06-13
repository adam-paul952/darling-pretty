import React from "react";
import SideNav from "../admin/components/SideNav";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import useAWSDatastore from "../hooks/useAWSData";

const ContactFormSubmissions = () => {
  const { getContactFormSubmissions } = useAWSDatastore();
  const [contactEntries, setContactEntries] = React.useState<any[]>([]);

  React.useEffect(
    () => {
      const getContactSubmissions = async () => {
        const contactSubmissions = await getContactFormSubmissions();
        setContactEntries(contactSubmissions);
      };

      getContactSubmissions();
    },
    //eslint-disable-next-line
    []
  );
  return (
    <>
      <SideNav />
      <div className="dashboard-container">
        <h2 className="text-center">Contact Form Submissions</h2>
        <Container>
          {contactEntries.length > 0 ? (
            <ContactEntries contactEntries={contactEntries} />
          ) : (
            <div>No submissions</div>
          )}
        </Container>
      </div>
    </>
  );
};

export default ContactFormSubmissions;

interface IContactEntriesProps {
  contactEntries: any[];
}

const ContactEntries: React.FC<IContactEntriesProps> = (props) => {
  const { deleteContactFormSubmission } = useAWSDatastore();
  const emailSubject = `Response to Inquiry from Darling Pretty Photography`;
  const removeEntry = async (id: string) => {
    await deleteContactFormSubmission(id);
  };
  return (
    <Accordion style={{ marginTop: "10%" }}>
      {props.contactEntries.map((entry) => {
        return (
          <Accordion.Item key={entry.id} eventKey={entry.id}>
            <Accordion.Header>
              <Row style={{ width: "100%" }}>
                <Col>{entry.name}</Col>
                <Col>{entry.email}</Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
              <Row style={{ margin: "5px 5px" }}>Subject: {entry.subject}</Row>
              <Row style={{ margin: "5px 5px" }}>Message: {entry.message}</Row>
              <Row style={{ marginLeft: "0px" }}>
                <Col>
                  <a href={`mailto:${entry.email}?subject=${emailSubject}`}>
                    Reply
                  </a>
                </Col>
                <Col>
                  <a
                    href="#"
                    style={{ color: "red" }}
                    onClick={() => {
                      removeEntry(entry.id);
                    }}
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

/*
 * TODO:
 * Add subscription to re-render after delete or create submission with page open
 */

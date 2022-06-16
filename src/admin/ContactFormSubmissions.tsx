import React from "react";

import { Container } from "react-bootstrap";
import SideNav from "../admin/components/SideNav";
import ContactEntries from "./components/ContactEntries";

import useContactForm, { IContactFormProps } from "../hooks/useContactForm";

const ContactFormSubmissions = () => {
  const { getContactFormSubmissions } = useContactForm();

  const [contactEntries, setContactEntries] = React.useState<
    IContactFormProps[]
  >([]);

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

/*
 * TODO:
 * Add subscription to re-render after delete or create submission with page open
 */

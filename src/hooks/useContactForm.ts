import React from "react";

import { API, graphqlOperation } from "aws-amplify";
import {
  createContact,
  updateContact,
  deleteContact,
} from "../graphql/mutations";
import { listContacts } from "../graphql/queries";

export interface IContactFormProps {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
}

const useContactForm = () => {
  const [unreadMessage, setUnread] = React.useState<number>(0);
  const [contactEntries, setContactEntries] = React.useState<
    IContactFormProps[]
  >([]);

  React.useEffect(() => {
    const getContactSubmissions = async () => {
      const contactSubmissions = await getContactFormSubmissions();
      contactSubmissions.forEach(
        (message: IContactFormProps) =>
          message.read === false && setUnread((prev) => prev + 1)
      );
      setContactEntries(contactSubmissions);
    };

    getContactSubmissions();
  }, []);

  const sendContactForm = async (data: IContactFormProps) => {
    try {
      return await API.graphql(
        graphqlOperation(createContact, { input: data })
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  const getContactFormSubmissions = async () => {
    try {
      const contactFormEntries: any = await API.graphql(
        graphqlOperation(listContacts)
      );
      return contactFormEntries.data.listContacts.items;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactFormSubmission = async (id: string) => {
    try {
      const removeContactEntry: any = await API.graphql(
        graphqlOperation(deleteContact, { input: { id } })
      );
      return removeContactEntry;
    } catch (error) {
      console.log(error);
    }
  };

  const updateMessageReadStatus = async (id: string) => {
    try {
      await API.graphql(
        graphqlOperation(updateContact, { input: { id, read: true } })
      );
      console.log(`Message has been marked as read!!`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    sendContactForm,
    unreadMessage,
    contactEntries,
    deleteContactFormSubmission,
    updateMessageReadStatus,
    setContactEntries,
  };
};

export default useContactForm;

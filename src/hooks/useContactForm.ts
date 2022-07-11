import { API, graphqlOperation } from "aws-amplify";
import { createContact } from "../graphql/mutations";
import { deleteContact } from "../graphql/mutations";
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

  return {
    sendContactForm,
    getContactFormSubmissions,
    deleteContactFormSubmission,
  };
};

export default useContactForm;

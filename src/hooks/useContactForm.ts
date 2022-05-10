import { API, graphqlOperation } from "aws-amplify";
import { createContact } from "../graphql/mutations";

interface IContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
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

  return { sendContactForm };
};

export default useContactForm;

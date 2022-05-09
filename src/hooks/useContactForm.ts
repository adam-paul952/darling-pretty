import axios from "axios";
import { API, graphqlOperation } from "aws-amplify";
import { createContact } from "../graphql/mutations";

interface IContactFormProps {
  name: string;
  email: string;
}
const useContactForm = () => {
  // const sendContactForm = (data: string) => {
  //   axios
  //     .post(URL, data)
  //     .then(() => {
  //       console.log(`Successfully sent message`);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // return {
  //   sendContactForm,
  // };
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

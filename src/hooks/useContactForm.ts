import axios from "axios";

const URL = process.env.REACT_APP_CONTACT_URL;

const useContactForm = () => {
  const sendContactForm = (data: string) => {
    axios
      .post(URL, data)
      .then(() => {
        console.log(`Successfully sent message`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    sendContactForm,
  };
};

export default useContactForm;

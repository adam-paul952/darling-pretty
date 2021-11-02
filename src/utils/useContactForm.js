import axios from "axios";

const URL = "http://localhost:8080/contact/";

const useContactForm = () => {
  const sendContactForm = (data) => {
    axios
      .post(URL, data)
      .then((res) => {
        console.log(`Successfully sent mail`);
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

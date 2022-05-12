import React from "react";
// Components
import ReCAPTCHAV2 from "react-google-recaptcha";
import Header from "../components/Header";
import TailwindCSSTextArea from "../components/TailwindCSSTextArea";
import TailwindCSSFormInput from "../components/TailwindFormInput";
import TailwindCSSButton from "../components/visual/TailwindCSSButton";
import SubmissionComplete from "../components/visual/ContactSuccessMessage";
// Hooks
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const { sendContactForm } = useContactForm();

  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const [token, setToken] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleToken = async (token: string | null) => {
    token ? setToken(true) : setToken(false);
  };

  const handleExpireToken = () => {
    setToken(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await sendContactForm({ name, email, subject, message });
    console.log(`
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`);
    setSuccess(true);
  };

  React.useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [success]);

  return (
    <>
      <Header title="Contact" />
      <div className="container">
        <div className="p-6 rounded-lg shadow-lg bg-white min-w-2/3">
          <div className="container flex justify-center mt-1 mb-2">
            <h3>Reach out with any questions or comments!</h3>
          </div>
          <form className="w-2/3 mx-auto">
            <TailwindCSSFormInput
              id="contactName"
              placeHolder="Name"
              label="Name "
              required
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <TailwindCSSFormInput
              id="contactEmail"
              placeHolder="john.doe@email.com"
              label="Email "
              required
              type="text"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <TailwindCSSFormInput
              id="contactSubject"
              placeHolder="Subject"
              label="Subject "
              required
              type="text"
              onChange={(e: any) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
            <TailwindCSSTextArea
              id="contactMessage"
              placeHolder="Message"
              label="Message "
              required
              rows={3}
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            {!success ? (
              <div className="flex flex-col items-center">
                <ReCAPTCHAV2
                  className="my-1"
                  sitekey={process.env.REACT_APP_SITE_KEY!}
                  onChange={handleToken}
                  onExpired={handleExpireToken}
                />
                <TailwindCSSButton
                  buttonTitle="Send Message"
                  onClick={(e: any) => handleSubmit(e)}
                  disabled={!token}
                />
              </div>
            ) : (
              <SubmissionComplete />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

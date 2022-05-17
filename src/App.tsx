// Components
import Header from "./components/Header";
import ShowAvailablePhotos from "./components/DisplaySessions";
import { Container } from "react-bootstrap";
// import { Authenticator } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <>
      {/* <Authenticator hideSignUp={true}> */}
      <Header title="Darling Pretty Photography" />
      <Container className="mt-2 mx-auto flex flex-column items-center">
        <ShowAvailablePhotos />
      </Container>
      {/* </Authenticator> */}
    </>
  );
};

export default App;

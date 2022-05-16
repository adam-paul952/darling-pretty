// Components
import Header from "./components/Header";
import ShowAvailablePhotos from "./components/DisplaySessions";
// import { Authenticator } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <>
      {/* <Authenticator hideSignUp={true}> */}
      <Header title="Darling Pretty Photography" />
      <div className="container mt-2 mx-auto flex flex-column items-center">
        <ShowAvailablePhotos />
      </div>
      {/* </Authenticator> */}
    </>
  );
};

export default App;

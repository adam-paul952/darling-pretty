// Components
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ShowAvailablePhotos from "./components/DisplaySessions";

const App = () => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <Container className="mt-3">
        <ShowAvailablePhotos />
      </Container>
    </>
  );
};

export default App;

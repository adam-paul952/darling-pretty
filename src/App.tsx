// Components
import Header from "./components/Header";
import ShowAvailablePhotos from "./components/DisplaySessions";

const App = () => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <div className="container mt-2 mx-auto flex flex-column items-center">
        <ShowAvailablePhotos />
      </div>
    </>
  );
};

export default App;

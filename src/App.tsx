import React from "react";

import Box from "@mui/material/Box";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DisplayServicesOffered from "./components/DisplayServicesOffered";
import Footer from "./components/Footer";

import { heroTitle, heroCaption } from "./constants/app";

// import { Authenticator } from "@aws-amplify/ui-react";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
      }}
    >
      {/* <Authenticator hideSignUp={true}> */}
      <Header title="Darling Pretty Photography" />
      <Hero header={heroTitle} caption={heroCaption} />
      <DisplayServicesOffered />
      <Footer />
      {/* </Authenticator> */}
    </Box>
  );
};

export default App;

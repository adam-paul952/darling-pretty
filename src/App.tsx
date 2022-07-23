import React from "react";

import { Box } from "@mui/material";

import Hero from "./components/Hero";
import DisplayServicesOffered from "./components/DisplayServicesOffered";

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
      <Hero />
      <DisplayServicesOffered />
      {/* </Authenticator> */}
    </Box>
  );
};

export default App;

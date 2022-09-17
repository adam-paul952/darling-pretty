import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

import Hero from "./components/Hero";
import DisplayServicesOffered from "./components/DisplayServicesOffered";

import useContentful from "./hooks/useContentful";
import { heroQuery, servicesQuery } from "./util/contentfulQuery";

// import { Authenticator } from "@aws-amplify/ui-react";

const App: React.FC = () => {
  const heroData = useContentful(heroQuery);
  const servicesData = useContentful(servicesQuery);

  return (
    <>
      <Helmet>
        <title>Darling Pretty Photography - Home</title>
        <meta
          name="description"
          content="Home page view services offered by Darling Pretty Photography"
        ></meta>
      </Helmet>

      <Box>
        {/* <Authenticator hideSignUp={true}> */}
        <Hero heroData={heroData} />
        <DisplayServicesOffered servicesData={servicesData} />
        {/* </Authenticator> */}
      </Box>
    </>
  );
};

export default App;

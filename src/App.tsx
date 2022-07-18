import React from "react";

import { Box } from "@mui/material";

import axios from "axios";
import Hero from "./components/Hero";
import DisplayServicesOffered from "./components/DisplayServicesOffered";
import HeroSkeletonLoading from "./skeletonScreens/HeroLoading";
import DisplayServicesOfferedLoading from "./skeletonScreens/DisplayServicesOfferedLoading";

// import { Authenticator } from "@aws-amplify/ui-react";
const query = /* GraphQL */ `
  query {
    servicesOfferedCollection {
      items {
        serviceName
        serviceImage {
          url
        }
        serviceDescription
      }
    }
    heroSectionCollection {
      items {
        heroTitle
        heroSubTitle
        heroButtonText
        heroImage {
          url
        }
      }
    }
  }
`;

const config = {
  url: process.env.REACT_APP_CONTENTFUL_URL,
  method: "post",
  data: JSON.stringify({ query }),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
};

const App: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [servicesOffered, setServicesOffered] = React.useState<any>([]);
  const [heroSection, setHeroSection] = React.useState<any>({});

  React.useEffect(() => {
    const getPageData = async () => {
      setLoading(true);
      try {
        const response = await axios(config);
        console.log(response);
        setServicesOffered(response.data.data.servicesOfferedCollection.items);
        setHeroSection(response.data.data.heroSectionCollection.items[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPageData();
  }, []);

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
      {isLoading ? (
        <>
          <HeroSkeletonLoading />
          <DisplayServicesOfferedLoading />
        </>
      ) : (
        <>
          <Hero
            header={heroSection.heroTitle}
            subtitle={heroSection.heroSubTitle}
            buttonText={heroSection.heroButtonText}
            image={heroSection.heroImage.url}
          />
          <DisplayServicesOffered servicesOffered={servicesOffered} />
        </>
      )}

      {/* </Authenticator> */}
    </Box>
  );
};

export default App;

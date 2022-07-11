import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DisplayServicesOffered from "./components/DisplayServicesOffered";
import Footer from "./components/Footer";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

// import { Authenticator } from "@aws-amplify/ui-react";

const query = `
  {
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

const App: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [servicesOffered, setServicesOffered] = React.useState<any>([]);
  const [heroSection, setHeroSection] = React.useState<any>({});
  React.useEffect(() => {
    const getPageData = async () => {
      setLoading(true);
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
      <Header />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "Column",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <Typography variant="h4">Darling Pretty Photograhpy</Typography>

          <Box sx={{ width: "50%", padding: "20px 0" }}>
            <LinearProgress />
          </Box>
        </Box>
      ) : (
        <>
          <Hero
            header={heroSection.heroTitle}
            subtitle={heroSection.heroSubTitle}
            buttonText={heroSection.heroButtonText}
          />
          <DisplayServicesOffered servicesOffered={servicesOffered} />
          <Footer />
        </>
      )}

      {/* </Authenticator> */}
    </Box>
  );
};

export default App;

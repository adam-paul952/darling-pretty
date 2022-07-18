import React from "react";

import axios from "axios";
import { FacebookRounded } from "@mui/icons-material";
import { Button, Grid, Link, Typography } from "@mui/material";

const query = /* GraphQL */ `
  query {
    footerCollection {
      items {
        name
        navLinksCollection {
          items {
            navLink
            linkText
          }
        }
        email
        phoneNumber
        facebookLink
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

interface IFooterDetailsState {
  name: string;
  email: string;
  facebookLink: string;
  phoneNumber: string;
  navLinksCollection: { items: INavLinkCollectionDetails[] };
}

interface INavLinkCollectionDetails {
  linkText: string;
  navLink: string;
}

const Footer = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [footerDetails, setFooterDetails] =
    React.useState<IFooterDetailsState | null>();

  React.useEffect(() => {
    const getPageData = async () => {
      setLoading(true);
      try {
        const response = await axios(config);
        console.log(response);
        setFooterDetails(response.data.data.footerCollection.items[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPageData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <hr style={{ marginTop: "30px" }} />
      <Grid
        container
        sx={{
          backgroundColor: "#000",
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={12} md={3} sx={{ alignSelf: { md: "center" } }}>
          <Typography
            sx={{
              display: { md: "flex" },
              textAlign: { xs: "center" },
              justifyContent: "flex-end",
              paddingTop: "6px",
              color: "#fff",
            }}
          >
            {footerDetails?.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: { md: "column", xs: "row" },
            justifyContent: { xs: "space-evenly" },
          }}
        >
          {footerDetails?.navLinksCollection.items.map(
            (item: { navLink: string; linkText: string }) => (
              <Button
                component="a"
                href={item.navLink}
                key={item.linkText}
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#fff", opacity: "0.5" },
                }}
              >
                {item.linkText}
              </Button>
            )
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: { xs: "center" },
            justifyContent: { md: "center" },
          }}
        >
          <Typography sx={{ color: "#fff", paddingTop: { md: "6px" } }}>
            Tel:&nbsp;
            <Link
              href={`tel:${footerDetails?.phoneNumber}`}
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff",
                  opacity: "0.5",
                  textDecoration: "underline",
                },
              }}
            >
              {footerDetails?.phoneNumber}
            </Link>
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Email:&nbsp;
            <Link
              href={`mailto:${footerDetails?.email}`}
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff",
                  opacity: "0.5",
                  textDecoration: "underline",
                },
              }}
            >
              {footerDetails?.email}
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            padding: "10px 20px",
            textAlign: { xs: "center", md: "left" },
            alignSelf: { md: "center" },
          }}
        >
          <Link href={footerDetails?.facebookLink}>
            <FacebookRounded
              sx={{
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { navItems } from "./Header";
import axios from "axios";

const query = `
{
  footerCollection {
    items {
      name
      navLinkHome
      navLinkTextHome
      navLinkLogIn
      navLinkTextLogIn
      navLinkContact
      navLinkTextContact
      phoneNumber
      email
      facebookLink
    }
  }
}
`;

const Footer = () => {
  const [footerDetails, setFooterDetails] = React.useState<any>({});
  React.useEffect(() => {
    const getPageData = async () => {
      // setLoading(true);
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
        setFooterDetails(response.data.data.footerCollection.items[0]);
      } catch (err) {
        console.log(err);
      }
      // finally {
      //   setLoading(false);
      // }
    };
    getPageData();
  }, []);
  return (
    <Box sx={{}}>
      <hr style={{ marginTop: "30px" }} />
      <Grid container sx={{ backgroundColor: "#000" }}>
        <Grid item xs={12} md={3}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "6px",
              color: "#fff",
            }}
          >
            {footerDetails.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {navItems.map((item) => (
            <Button
              component="a"
              href={item.url}
              key={item.id}
              sx={{
                color: "#fff",
                "&:hover": { color: "#fff", opacity: "0.5" },
              }}
            >
              {item.route}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ color: "#fff", paddingTop: "6px" }}>
            Tel:&nbsp;
            <Link
              href="#"
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
              (555)&nbsp;555-5555
            </Link>
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Email:&nbsp;
            <Link
              href="#"
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
              email@email.com
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ padding: "10px 20px" }}>
          <Link href="#">
            <FacebookRoundedIcon
              sx={{
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

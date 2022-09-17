import React from "react";

import { Button, Grid, Link, Typography } from "@mui/material";
import { FacebookRounded } from "@mui/icons-material";

import useContentful from "../hooks/useContentful";

import { footerQuery } from "../util/contentfulQuery";

interface INavLinkCollectionDetails {
  linkText: string;
  navLink: string;
}

const Footer = () => {
  const { data, loading } = useContentful(footerQuery);

  if (loading) {
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
            {data.footerCollection?.items[0].name}
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
          {data.footerCollection?.items[0].navLinksCollection.items.map(
            (item: INavLinkCollectionDetails) => (
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
            flexDirection: { xs: "row", md: "column" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "space-evenly", md: "center" },
          }}
        >
          <Typography sx={{ color: "#fff", paddingTop: { md: "6px" } }}>
            Tel:&nbsp;
            <Link
              href={`tel:${data.footerCollection?.items[0].phoneNumber}`}
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
              {data.footerCollection?.items[0].phoneNumber}
            </Link>
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Email:&nbsp;
            <Link
              href={`mailto:${data.footerCollection?.items[0].email}`}
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
              {data.footerCollection?.items[0].email}
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
          <Link href={data.footerCollection?.items[0].facebookLink}>
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

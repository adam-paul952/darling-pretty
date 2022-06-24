import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ISessionInfo } from "../hooks/useSessionInfo";
import { Link } from "react-router-dom";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: any) {
  // const { date, sessionDetails, sessionImage, name } = props;
  const { post } = props;

  return (
    <Grid item xs={12} md={10}>
      <Link
        to={`/photo/${post.id}`}
        state={{ session: post }}
        style={{ textDecoration: "none" }}
      >
        {/* <CardActionArea component="a" href="#"> */}
        <Card
          sx={{
            display: "flex",
            backgroundColor: "gainsboro",
            transition: "all 0.2s ease-in-out",
            "&:hover": { transform: "scale(1.03)" },
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1%",
            }}
          >
            <Typography component="h2" variant="h5">
              {post.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.price}
            </Typography>
            <Typography variant="h5" color="primary">
              Check Availabilities
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              flex: 0.5,
              padding: "20px",
              display: { xs: "none", sm: "block" },
            }}
            src={post.sessionImage.name}
            alt="Darling Pretty Logo"
          />
        </Card>
        {/* </CardActionArea> */}
      </Link>
    </Grid>
  );
}

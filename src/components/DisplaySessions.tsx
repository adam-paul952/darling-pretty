import React from "react";

import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { ISessionInfo } from "../hooks/useSessionInfo";
interface IDisplaySessionsProps {
  session: ISessionInfo;
}

const DisplaySessions: React.FC<IDisplaySessionsProps> = (props) => {
  const { session } = props;

  return (
    <Grid item xs={12} md={10}>
      <Link
        to={`/photo/${session.id}`}
        state={{ session: session }}
        style={{ textDecoration: "none" }}
      >
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
              {session.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {session.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {session.price}
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
            src={session.sessionImage.name}
            alt="Darling Pretty Logo"
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default DisplaySessions;

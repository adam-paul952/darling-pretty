import React from "react";

import { Link } from "react-router-dom";
import ShowAvailableTime from "./ShowAvailableTime";

import { Button, Container, Grid, Typography } from "@mui/material";

import moment from "moment";

import DOMPurify from "dompurify";

import { ISessionInfo } from "../hooks/useSessionInfo";

interface ISessionDescriptionProps {
  session: ISessionInfo;
}

const SessionDescription: React.FC<ISessionDescriptionProps> = (props) => {
  const { session } = props;

  const dateString = moment(
    `${session.date}T${session.availableTimes![0]}`,
    "ddd, MMMM Do YYYYTHH:mm"
  ).toDate();

  const [startDate, setStartDate] = React.useState<Date>(dateString);

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(session.sessionDetails),
  });

  return (
    <Container sx={{ marginTop: { md: "52px", minHeight: "65vh" } }}>
      <Grid container spacing={4} sx={{ maxWidth: "100%" }}>
        <Grid item md={7}>
          <img
            src={session.sessionImage.name}
            alt="Darling-Pretty logo"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <Typography
            component="h3"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
          >
            {session.name}
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>{session.price}</Typography>
          <Typography
            component="div"
            sx={{ padding: "10px 0" }}
            dangerouslySetInnerHTML={sanitizeData()}
          />
          <Typography sx={{ padding: "10px 0" }}>{session.date}</Typography>
          <Typography sx={{ padding: "5px 0" }}>Available Times:</Typography>
          <ShowAvailableTime
            session={session}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          <Link
            to="/checkout"
            state={{
              session: session,
              sessionTime: startDate,
            }}
          >
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SessionDescription;

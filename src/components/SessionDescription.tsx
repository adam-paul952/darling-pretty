import React from "react";

import { Link } from "react-router-dom";
import moment from "moment";
import DOMPurify from "dompurify";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";

import ShowAvailableTime from "./ShowAvailableTime";
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
    <Container sx={{ marginTop: { lg: "75px", sm: "80px", xs: "75px" } }}>
      <Paper elevation={5} sx={{ padding: { xs: "20px 10px" } }}>
        <Grid
          container
          spacing={4}
          sx={{ maxWidth: "100%", justifyContent: { xs: "center" } }}
        >
          <Grid item md={7} xs={10}>
            <img
              src={session.sessionImage.name}
              alt="Darling-Pretty logo"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item md={5} xs={11}>
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
            <Button
              variant="contained"
              component={Link}
              to="/checkout"
              state={{ session: session, sessionTime: startDate }}
              sx={{
                fontSize: "14px",
                marginTop: "10px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "darkblue",
                },
                backgroundColor: "#000",
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SessionDescription;

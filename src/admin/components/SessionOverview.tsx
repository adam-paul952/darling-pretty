import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ISessionInfo } from "../../hooks/useSessionInfo";

interface ISessionOverviewProps {
  sessions: ISessionInfo[];
  formatDate: (date: string) => string;
}

const SessionOverview: React.FC<ISessionOverviewProps> = (props) => {
  const { sessions, formatDate } = props;
  return (
    <>
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
          a: { textDecoration: "none" },
        }}
      />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {sessions.map((session: ISessionInfo) => (
            <Grid item key={session.name} xs={12} md={12 / sessions.length}>
              <Card>
                <CardHeader
                  title={session.name}
                  subheader={formatDate(session.date)}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme: any) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      Available Sessions:&nbsp;
                      {session.availableTimes === undefined
                        ? "Error in retrieving value"
                        : session.availableTimes.length}
                    </Typography>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      Bookings:&nbsp;
                      {session.bookings === undefined
                        ? "Error in retrieving value"
                        : session.bookings.length}
                    </Typography>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      Start Time: {session.startTime}
                    </Typography>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      End Time: {session.endTime}
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined">
                    <Link
                      to="/admin/createsession"
                      state={{ sessionId: session.id }}
                    >
                      Edit Session
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SessionOverview;
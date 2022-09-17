import React from "react";

import moment from "moment";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  GlobalStyles,
  Grid,
  Typography,
} from "@mui/material";

import NoInfoAvailable from "./NoInfoAvailable";
import useSessionInfo, { ISessionInfo } from "../../hooks/useSessionInfo";
import { useSessionContext } from "../../context/SessionContext";

const SessionOverview: React.FC = () => {
  const { sessions, setSessions } = useSessionContext();
  const { removeSession } = useSessionInfo();

  const deleteSession = (id: string) => {
    if (id !== undefined) removeSession(id);
    setSessions(() => sessions!.filter((session) => session.id !== id));
  };
  return (
    <>
      {sessions !== null && sessions.length === 0 ? (
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NoInfoAvailable variant="sessions" />
        </Grid>
      ) : (
        <>
          <GlobalStyles
            styles={{
              ul: { margin: 0, padding: 0, listStyle: "none" },
              a: { textDecoration: "none" },
            }}
          />
          <Container maxWidth="md" component="main">
            <Grid container spacing={5}>
              {sessions?.map((session: ISessionInfo) => (
                <Grid item key={session.name} xs={12} md={4}>
                  <Card>
                    <CardHeader
                      title={session.name}
                      subheader={session.date}
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
                          Start Time:&nbsp;
                          {moment(session.startTime, "hh:mm:ss A").format(
                            "h:mm A"
                          )}
                        </Typography>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          End Time:{" "}
                          {moment(session.endTime, "hh:mm:ss A").format(
                            "h:mm A"
                          )}
                        </Typography>
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        component={Link}
                        to="/admin/createsession"
                        state={{ sessionId: session.id }}
                        variant="outlined"
                        sx={{
                          color: "#000",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "#000",
                            border: "1px solid #000",
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        Edit Session
                      </Button>
                    </CardActions>
                    <CardActions>
                      <Button
                        fullWidth
                        onClick={() => deleteSession(session.id!)}
                        variant="outlined"
                        sx={{
                          color: "red",
                          border: "1px solid red",
                          "&:hover": {
                            color: "red",
                            border: "1px solid red",
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        Delete Session
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default SessionOverview;

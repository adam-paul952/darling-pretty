import React from "react";

import moment from "moment";
import { Box, Toolbar } from "@mui/material";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { ISessionInfo, IBookingInfo } from "../hooks/useSessionInfo";
import { useSessionContext } from "../context/SessionContext";
interface IEvents {
  title: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
}

const SessionCalendar = () => {
  const { sessions } = useSessionContext();
  const [listOfSessions, setSessions] = React.useState<IEvents[]>([]);

  const formatDate = (date: string) => {
    return moment(date, "ddd, MMMM Do YYYY").format("YYYY-MM-DD");
  };

  React.useEffect(() => {
    const fetchSessions = async () => {
      const currentSessions: any[] = [];
      sessions?.forEach((session: ISessionInfo) => {
        session.bookings?.forEach((booking: IBookingInfo) => {
          const clientStart = `${formatDate(session.date)}T${moment(
            booking.startTime,
            "hh:mm A"
          ).format("HH:mm:ss")}`;

          const clientEnd = moment(clientStart)
            .add(session.sessionLength, "m")
            .format("YYYY-MM-DDTHH:mm");

          currentSessions.push({
            title: booking.clientName,
            start: moment(clientStart).format("YYYY-MM-DDTHH:mm"),
            end: clientEnd,
          });
        });

        currentSessions.push({
          title: session.name,
          allDay: true,
          start: formatDate(session.date),
        });
      });

      setSessions(currentSessions);
    };

    fetchSessions();
    //eslint-disable-next-line
  }, [sessions]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        marginTop: { sm: "20px" },
      }}
    >
      <Toolbar />
      <Box sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <FullCalendar
          contentHeight={630}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialDate={new Date()}
          events={listOfSessions}
          nowIndicator={true}
          slotDuration="00:20:00"
          slotMinTime={"08:00:00"}
          slotMaxTime={"19:00:00"}
          eventMinHeight={30}
        />
      </Box>
    </Box>
  );
};

export default SessionCalendar;

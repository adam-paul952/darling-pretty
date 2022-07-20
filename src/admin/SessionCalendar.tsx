import React from "react";

import moment from "moment";
import { Box, Toolbar } from "@mui/material";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import useSessionInfo, {
  ISessionInfo,
  IBookingInfo,
} from "../hooks/useSessionInfo";
interface IEvents {
  title: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
}

const SessionCalendar = () => {
  const { getAllSessions } = useSessionInfo();
  const [sessions, setSessions] = React.useState<IEvents[]>([]);

  React.useEffect(() => {
    const fetchSessions = async () => {
      const currentSessions: any[] = [];
      try {
        const allSessions = await getAllSessions();
        allSessions.forEach((session: ISessionInfo) => {
          session.bookings?.forEach((booking: IBookingInfo) => {
            const clientStart = `${session.date}T${moment(
              booking.startTime,
              "hh:mm A"
            ).format("HH:mm:ss")}`;

            const clientEnd = moment(clientStart)
              .add(session.sessionLength, "m")
              .format("YYYY-MM-DDTHH:mm");

            const formatClientDate =
              moment(clientStart).format("YYYY-MM-DDTHH:mm");

            currentSessions.push({
              title: booking.clientName,
              start: formatClientDate,
              end: clientEnd,
            });
          });

          currentSessions.push({
            title: session.name,
            allDay: true,
            start: session.date,
          });
        });

        setSessions(currentSessions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSessions();
    //eslint-disable-next-line
  }, []);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        marginTop: { sm: "65px" },
      }}
    >
      <Toolbar />
      <Box sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
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
          events={sessions}
          nowIndicator={true}
          slotDuration="00:20:00"
        />
      </Box>
    </Box>
  );
};

export default SessionCalendar;

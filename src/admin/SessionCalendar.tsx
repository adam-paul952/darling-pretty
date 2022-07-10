import React from "react";

import SideNav from "./components/SideNav";
import FullCalendar from "@fullcalendar/react";
import DashboardHeader from "./components/DashboardHeader";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Box";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import moment from "moment";

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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const fetchSessions = async () => {
      const currentSessions: any[] = [];
      try {
        const allSessions = await getAllSessions();
        allSessions.forEach((session: ISessionInfo) => {
          session.bookings?.forEach((booking: IBookingInfo) => {
            const clientStart = `${session.date}T${booking.startTime}`;
            const clientEnd = moment(clientStart)
              .add(session.sessionLength, "m")
              .format("YYYY-MM-DDTHH:mm");
            const formatClientDate = moment().format(clientStart);

            currentSessions.push({
              title: booking.clientName,
              start: formatClientDate,
              end: clientEnd,
            });
          });

          const startTime = `${session.date}T${session.startTime}`;
          const momentDate = moment().format(startTime);

          currentSessions.push({
            title: session.name,
            allDay: true,
            start: momentDate,
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
    <Box sx={{ display: "flex" }}>
      <DashboardHeader open={open} toggleDrawer={toggleDrawer} />
      <SideNav open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box sx={{ paddingLeft: "5%" }}>
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
    </Box>
  );
};

export default SessionCalendar;

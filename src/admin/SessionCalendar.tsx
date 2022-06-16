import React from "react";

import { Container } from "react-bootstrap";
import SideNav from "./components/SideNav";
import FullCalendar from "@fullcalendar/react";

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
    <Container className="calendar-container">
      <SideNav />
      <div>
        <FullCalendar
          contentHeight={575}
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
      </div>
    </Container>
  );
};

export default SessionCalendar;

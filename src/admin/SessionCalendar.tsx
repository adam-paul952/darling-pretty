import React from "react";
// Components
import SideNav from "./components/SideNav";
import FullCalendar from "@fullcalendar/react";
import { Container } from "react-bootstrap";
// FullCalendar Plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// Hooks
import useAWSDatastore from "../hooks/useAWSData";
import moment from "moment";
// Types
import { ISessionInfo, IBookingInfo } from "../hooks/useAWSData";
interface IEvents {
  title: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
}

const SessionCalendar = () => {
  const { listAllSessions } = useAWSDatastore();
  const [sessions, setSessions] = React.useState<IEvents[]>([]);

  React.useEffect(() => {
    const fetchSessions = async () => {
      const currentSessions: any[] = [];
      try {
        const allSessions = await listAllSessions();
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
          // weekends={this.state.weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventClick={this.handleEventClick}
          // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>
    </Container>
  );
};

export default SessionCalendar;

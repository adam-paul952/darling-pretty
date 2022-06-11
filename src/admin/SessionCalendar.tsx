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
      try {
        const allSessions = await listAllSessions();
        const currentSessions = allSessions.map((session: any, index: any) => {
          const startTime = `${session.date}T${session.startTime}`;
          const endTime = `${session.date}T${session.endTime}`;
          const momentDate = moment().format(startTime);
          const momentTime = moment().format(endTime);
          return {
            title: session.name,
            allDay: true,
            start: momentDate,
            // end: momentTime,
          };
        });
        setSessions(currentSessions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
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
          editable={true}
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

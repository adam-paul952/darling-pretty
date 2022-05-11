import React from "react";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import useAWSDatastore, { ISessionInfo } from "../hooks/useAWSData";
import { addDays, addHours, addMinutes } from "date-fns";

interface IEvents {
  date: Date;
  title: string;
}

type SessionEventsT = ISessionInfo[];

// const clientEvents: EventInput[] = clients.map((client) => {
//   const { name, contact, bookingDetails } = client;

//   let startTime = new Date(bookingDetails.sessionDate);
//   let endTime = addMinutes(startTime, parseInt(bookingDetails.lengthOfSession));

//   return {
//     title: `${name.firstName} ${name.lastName} - ${contact.phoneNumber}`,
//     start: startTime,
//     end: endTime,
//   };
// });

const SessionCalendar = () => {
  const { listAllSessions } = useAWSDatastore();
  const [sessions, setSessions] = React.useState<any>([]);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await listAllSessions();
        allSessions.map((session: any) => {
          const date = addDays(new Date(session.date), 1);
          const startTime = addHours(
            date,
            parseInt(session.startTime.slice(0, 2))
          );
          console.log(startTime);
          // return {title: 'Name', start: , end: ,}
        });
        console.log(allSessions);
        // console.log(testSessionEdit);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
  }, []);

  return (
    <>
      <FullCalendar
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
        // events={[{ title: "Test", date: new Date() }]}
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
    </>
  );
};

export default SessionCalendar;

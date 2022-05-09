import React from "react";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import useAWSDatastore, { ISessionInfo } from "../hooks/useAWSData";
import addMinutes from "date-fns/addMinutes";

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
        console.log(allSessions);
        const testDate = allSessions.forEach((session: any) => {
          const date = session.date.split("-").map(Number);
          const start = parseInt(session.startTime.slice(0, 2), 10);
          const startDateString = new Date(date[0], date[1], date[2], start);
          const end = parseInt(session.endTime.slice(0, 2), 10);
          const endDateString = new Date(date[0], date[1], date[2], end);
          // console.log(endDateString);
          return {
            title: session.name,
            date: new Date(date[0], date[1], date[2]),
            // start: startDateString,
            // end: endDateString,
          };
        });
        setSessions(testDate);
        // console.log(testSessionEdit);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
  }, []);

  React.useEffect(() => {
    console.log(sessions);
  }, [sessions]);

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

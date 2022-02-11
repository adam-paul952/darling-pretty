import React from "react";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import clients from "../util/clientInfo";
import addMinutes from "date-fns/addMinutes";

interface IEvents {
  date: Date;
  title: string;
}

const clientEvents: EventInput[] = clients.map((client) => {
  const { name, contact, bookingDetails } = client;

  let startTime = new Date(bookingDetails);
  let endTime = addMinutes(startTime, 20);

  return {
    title: `${name.firstName} ${name.lastName} - ${contact.phoneNumber}`,
    start: startTime,
    end: endTime,
  };
});
const SessionCalendar = () => {
  const [events, setEvents] = React.useState(clients);

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
        events={clientEvents}
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

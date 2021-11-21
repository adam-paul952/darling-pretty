import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addMinutes from "date-fns/addMinutes";

import "react-datepicker/dist/react-datepicker.css";

export const ShowAvailableTime = ({ session }) => {
  const [startDate, setStartDate] = useState(
    setHours(
      setMinutes(new Date(session.date), session.startMinute),
      session.startHour
    )
  );

  let startDayTime = startDate;
  const timeIntervals = [];

  for (let i = 0; i < session.numberOfSessions; i++) {
    timeIntervals.push(startDayTime);
    startDayTime = addMinutes(startDayTime, 20);
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={20}
        timeCaption="Time"
        dateFormat="h:mm aa"
        includeDates={[new Date(2021, 10, 27)]} // November 27th, 2021
        includeTimes={timeIntervals}
      />
    </>
  );
};

ShowAvailableTime.propTypes = {
  session: PropTypes.object.isRequired,
};

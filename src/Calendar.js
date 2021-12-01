import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addMinutes from "date-fns/addMinutes";

import "react-datepicker/dist/react-datepicker.css";

export const ShowAvailableTime = ({ session, setSessionDate }) => {
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

  const handleChange = (date) => {
    setStartDate(date);
    setSessionDate(date);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChange(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={session.lengthOfSessions}
        timeCaption="Time"
        dateFormat="h:mm aa"
        includeDates={[new Date(session.date)]} // November 27th, 2021
        includeTimes={timeIntervals}
      />
    </>
  );
};

ShowAvailableTime.propTypes = {
  session: PropTypes.object.isRequired,
  setSessionDate: PropTypes.func.isRequired,
};

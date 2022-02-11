import React from "react";

import DatePicker from "react-datepicker";
import addMinutes from "date-fns/addMinutes";
import "react-datepicker/dist/react-datepicker.css";

import { ISessionInfo } from "../util/sessionInfo";

interface Props {
  session: ISessionInfo;
  setSessionDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ShowAvailableTime: React.FC<Props> = ({
  session,
  setSessionDate,
  startDate,
  setStartDate,
}) => {
  let startDayTime = startDate;
  React.useEffect(() => {
    console.log(startDate);
  }, [startDate]);
  const timeIntervals: Date[] = [];

  for (let i = 0; i < session.numberOfSessions; i++) {
    timeIntervals.push(startDayTime);
    startDayTime = addMinutes(startDayTime, session.lengthOfSessions);
  }

  const handleChange = (date: Date) => {
    setStartDate(date);
    setSessionDate(date);
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          handleChange(date);
        }}
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

export default ShowAvailableTime;

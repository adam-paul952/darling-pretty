import React from "react";
// Components
import DatePicker from "react-datepicker";
import addMinutes from "date-fns/addMinutes";
import "react-datepicker/dist/react-datepicker.css";
// Types
import { ISessionInfo } from "../hooks/useAWSData";
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

  const timeIntervals: Date[] = [];

  let numberOfSessions = session.availableTimes.length;

  for (let i = 0; i < numberOfSessions; i++) {
    timeIntervals.push(startDayTime);
    startDayTime = addMinutes(startDayTime, session.sessionLength!);
  }

  const handleChange = (date: Date) => {
    setStartDate!(date);
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
        timeIntervals={session.sessionLength}
        timeCaption="Time"
        dateFormat="h:mm aa"
        includeDates={[new Date(session.date)]}
        includeTimes={timeIntervals}
      />
    </>
  );
};

export default ShowAvailableTime;

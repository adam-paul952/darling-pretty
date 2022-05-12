import React from "react";
// Components
import DatePicker from "react-datepicker";
import addMinutes from "date-fns/addMinutes";
import addHours from "date-fns/addHours";
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
  const [bookingOptions, setBookingOptions] = React.useState<Date[]>([]);

  React.useEffect(() => {
    const newBookings = session.availableTimes.map((time) => {
      const date = new Date(session.date);
      const timesAvailable = addMinutes(
        addHours(date, parseInt(time.slice(0, 2))),
        parseInt(time.slice(3, 5))
      );
      return timesAvailable;
    });
    setBookingOptions(newBookings);
  }, []);

  const handleChange = (date: Date) => {
    setStartDate!(date);
    setSessionDate(date);
  };

  return (
    <DatePicker
      className="mb-2 border border-grey-300 rounded-xl p-1 text-center"
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
      includeTimes={bookingOptions}
    />
  );
};

export default ShowAvailableTime;

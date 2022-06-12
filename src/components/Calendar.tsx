import React from "react";
// Components
import DatePicker from "react-datepicker";
import addMinutes from "date-fns/addMinutes";
import addHours from "date-fns/addHours";
// Types
import { ISessionInfo } from "../hooks/useAWSData";
interface IShowAvailableProps {
  session: ISessionInfo;
  setSessionDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ShowAvailableTime: React.FC<IShowAvailableProps> = (props) => {
  const [bookingOptions, setBookingOptions] = React.useState<Date[]>([]);

  React.useEffect(() => {
    const newBookings = props.session.availableTimes.map((time) => {
      const date = new Date(props.session.date);
      const timesAvailable = addMinutes(
        addHours(date, parseInt(time.slice(0, 2))),
        parseInt(time.slice(3, 5))
      );
      return timesAvailable;
    });
    setBookingOptions(newBookings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (date: Date) => {
    props.setStartDate!(date);
    props.setSessionDate(date);
  };

  return (
    <DatePicker
      className="mb-2 datepicker-input"
      selected={props.startDate}
      onChange={(date: Date) => {
        handleChange(date);
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={props.session.sessionLength}
      timeCaption="Time"
      dateFormat="h:mm aa"
      includeDates={[new Date(props.session.date)]}
      includeTimes={bookingOptions}
    />
  );
};

export default ShowAvailableTime;

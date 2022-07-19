import React from "react";

import DatePicker from "react-datepicker";
import moment from "moment";

import { ISessionInfo } from "../hooks/useSessionInfo";
interface IShowAvailableProps {
  session: ISessionInfo;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ShowAvailableTime: React.FC<IShowAvailableProps> = (props) => {
  const { session, startDate, setStartDate } = props;
  const { availableTimes, sessionLength } = session;

  const [bookingOptions, setBookingOptions] = React.useState<Date[]>([]);

  const onHandleDateChange = (date: Date) => {
    setStartDate(date);
  };

  React.useEffect(() => {
    const newBookings = (): Date[] => {
      const available: Date[] = [];
      availableTimes?.forEach((time) =>
        available.push(moment(time, "h:mm A").toDate())
      );

      return available;
    };

    setBookingOptions(newBookings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DatePicker
      className="mb-2"
      selected={startDate}
      onChange={onHandleDateChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={sessionLength}
      timeCaption="Time"
      dateFormat="h:mm a"
      includeTimes={bookingOptions}
    />
  );
};

export default ShowAvailableTime;

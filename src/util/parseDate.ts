import addMinutes from "date-fns/addMinutes";

interface IParseDateTimeProps {
  formattedDate: string;
  startTime: string;
  endTime: string;
  sessionLength: number;
}
export const parseDateTime = (props: IParseDateTimeProps) => {
  const bookings: string[] = [];
  const sessionDate = props.formattedDate.split("-").map(Number);
  const start = parseInt(props.startTime.slice(0, 2), 10);
  const startDateString = new Date(
    sessionDate[0],
    sessionDate[1] - 1,
    sessionDate[2],
    start
  );

  const numberOfSessions =
    ((parseInt(props.endTime, 10) - parseInt(props.startTime, 10)) * 60) /
      props.sessionLength! +
    1;

  for (let i = 0; i < numberOfSessions; i++) {
    if (i === 0) {
      bookings.push(addMinutes(startDateString, 0).toString().slice(16, 21));
    } else {
      bookings.push(
        addMinutes(startDateString, props.sessionLength! * i)
          .toString()
          .slice(16, 21)
      );
    }
  }
  return bookings;
};

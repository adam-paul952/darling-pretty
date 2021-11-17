import React, { useState } from "react";
import DatePicker from "react-datepicker";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addMinutes from "date-fns/addMinutes";

import "react-datepicker/dist/react-datepicker.css";

export const ShowAvailableTimeDay1 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 10, 27), 40), 8) // November 27, 2021 8:40 AM
  );

  let startDayTime = startDate;
  const timeIntervals = [];

  for (let i = 0; i < 19; i++) {
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

// const ShowAvailableTimeDay2 = () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(2021, 10, 28), 40), 8)
//   );

//   return (
//     <>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         disabledKeyboardNavigation
//         showTimeSelect
//         showTimeSelectOnly
//         includeDates={[new Date(2021, 10, 28)]}
//         includeTimes={[
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 8),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 9),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 11),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 12),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 13),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 14),
//         ]}
//         dateFormat="MMMM d, h:mm aa"
//       />
//       <Button variant="success" className="mt-2">
//         Proceed to Checkout
//       </Button>
//     </>
//   );
// };
// const ShowAvailableTimeDay3 = () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(2021, 11, 5), 0), 10)
//   );

//   return (
//     <>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         disabledKeyboardNavigation
//         showTimeSelect
//         showTimeSelectOnly
//         includeDates={[new Date(2021, 11, 5)]}
//         includeTimes={[
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 11),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 12),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 13),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
//         ]}
//         dateFormat="MMMM d, h:mm aa"
//       />
//       <Button variant="success" className="mt-2">
//         Proceed to Checkout
//       </Button>
//     </>
//   );
// };
// const ShowAvailableTimeDay4 = () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(2021, 11, 12), 0), 9)
//   );

//   return (
//     <>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         disabledKeyboardNavigation
//         showTimeSelect
//         showTimeSelectOnly
//         includeDates={[new Date(2021, 11, 12)]}
//         includeTimes={[
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 9),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
//           setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
//         ]}
//         dateFormat="MMMM d, h:mm aa"
//       />
//       <Button variant="success" className="mt-2">
//         Proceed to Checkout
//       </Button>
//     </>
//   );
// };

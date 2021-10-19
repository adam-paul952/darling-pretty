import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { Col, Container, Row } from "react-bootstrap";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";

import "react-datepicker/dist/react-datepicker.css";

// Include dates
const Calendar = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <IncludeTimes />
          </Col>
          <Col>
            <ShowTimeOnly />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const IncludeTimes = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      disabledKeyboardNavigation
      showTimeSelect
      includeDates={[
        new Date(),
        addDays(new Date(), 1),
        addDays(new Date(), 2),
        addDays(new Date(), 3),
      ]}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 60), 18),
        setHours(setMinutes(new Date(), 60), 19),
        setHours(setMinutes(new Date(), 60), 21),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

const ShowTimeOnly = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 17)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={60}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 60), 18),
        setHours(setMinutes(new Date(), 60), 19),
        setHours(setMinutes(new Date(), 60), 21),
      ]}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};

export default Calendar;

// import DatePicker from "react-datepicker";

// import setHours from "date-fns/setHours";
// import setMinutes from "date-fns/setMinutes";
export const ShowAvailableTimeDay1 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 10, 27), 40), 8)
  );

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
        includeDates={[new Date(2021, 10, 27)]}
        includeTimes={[
          setHours(setMinutes(new Date(2021, 10, 27), 40), 8),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
          setHours(setMinutes(new Date(2021, 10, 27), 20), 14),
          setHours(setMinutes(new Date(2021, 10, 27), 40), 14),
        ]}
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

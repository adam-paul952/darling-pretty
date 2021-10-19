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

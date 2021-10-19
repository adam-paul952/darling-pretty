import { useState } from "react";
import Header from "../Header";
import { Card, CardGroup, Container, Row } from "react-bootstrap";

import DatePicker from "react-datepicker";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const DarlingPrettyHome = () => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <Container className="mt-3">
        <ShowAvailablePhotos />
      </Container>
    </>
  );
};

const ShowAvailablePhotos = () => {
  return (
    <>
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="darling-pretty1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <ShowAvailableTimeDay1 />
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="darling-pretty1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <ShowAvailableTimeDay2 />
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="darling-pretty1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <ShowAvailableTimeDay3 />
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="darling-pretty1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <ShowAvailableTimeDay4 />
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </>
  );
};

const ShowAvailableTimeDay1 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 10, 27), 40), 8)
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        showTimeSelect
        showTimeSelectOnly
        includeDates={[new Date(2021, 10, 27)]}
        includeTimes={[
          setHours(setMinutes(new Date(2021, 10, 27), 30), 8),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 14),
        ]}
        dateFormat="MMMM d, h:mm aa"
      />
    </>
  );
};

const ShowAvailableTimeDay2 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 10, 28), 40), 8)
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        showTimeSelect
        showTimeSelectOnly
        includeDates={[new Date(2021, 10, 28)]}
        includeTimes={[
          setHours(setMinutes(new Date(2021, 10, 27), 30), 8),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 14),
        ]}
        dateFormat="MMMM d, h:mm aa"
      />
    </>
  );
};
const ShowAvailableTimeDay3 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 11, 5), 0), 10)
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        showTimeSelect
        showTimeSelectOnly
        includeDates={[new Date(2021, 11, 5)]}
        includeTimes={[
          setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 11),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 12),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 13),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 14),
        ]}
        dateFormat="MMMM d, h:mm aa"
      />
    </>
  );
};
const ShowAvailableTimeDay4 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(2021, 11, 12), 0), 9)
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        showTimeSelect
        showTimeSelectOnly
        includeDates={[new Date(2021, 11, 12)]}
        includeTimes={[
          setHours(setMinutes(new Date(2021, 10, 27), 0), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 9),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 30), 10),
          setHours(setMinutes(new Date(2021, 10, 27), 0), 11),
        ]}
        dateFormat="MMMM d, h:mm aa"
      />
    </>
  );
};

export default DarlingPrettyHome;

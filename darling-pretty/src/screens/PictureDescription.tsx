import React from "react";
import { Link, useParams } from "react-router-dom";

import { sessionInfo } from "../util/sessionInfo";

import { Button, Container } from "react-bootstrap";

import ShowAvailableTime from "../components/Calendar";
import Header from "../components/Header";
import { ISessionInfo } from "../util/sessionInfo";
import darlingPretty from "../images/darling-pretty1.jpg";

import useSessionInfo from "../hooks/useSessionInfo";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

interface Session {
  session: ISessionInfo;
  setSessionDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  setStartDate?: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
}

const PictureDescription = () => {
  const { setSessionDate } = useSessionInfo();

  const { id } = useParams();

  return (
    <>
      {sessionInfo
        .filter((session) => session.id === id)
        .map((session) => {
          return (
            <>
              <Header title={session.date} />
              <SessionInfo
                key={id}
                session={session}
                setSessionDate={setSessionDate}
              />
            </>
          );
        })}
    </>
  );
};

const SessionInfo: React.FC<Session> = ({ session, setSessionDate }) => {
  const [startDate, setStartDate] = React.useState(
    setHours(
      setMinutes(new Date(session.date), session.startMinute),
      session.startHour
    )
  );

  return (
    <Container key={session.id}>
      <img
        className="float_left"
        src={darlingPretty}
        alt="Darling-Pretty logo"
        width="450"
        height="350"
      />
      <h2>Price</h2>
      <p>
        <b>{session.price}</b>
      </p>
      <hr />
      <h3>Date</h3>
      <p>
        <b>{session.date}</b>
      </p>
      <hr />
      <h2>Session Includes:</h2>
      <p>{session.details}</p>
      <hr />
      <div className="centerItems">
        <ShowAvailableTime
          key={session.id}
          session={session}
          setSessionDate={setSessionDate}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <Button>
          <Link
            className="buttonLink"
            to="/register"
            state={{
              startDate: startDate,
              price: session.price,
              sessionLength: session.lengthOfSessions,
            }}
          >
            Add to Cart
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default PictureDescription;

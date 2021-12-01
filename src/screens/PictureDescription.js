import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import { ShowAvailableTime } from "../Calendar";
import Header from "../components/Header";

import useSessionInfo from "../utils/useSessionInfo";

const PictureDescription = ({ sessionInfo }) => {
  const { sessionDate, setSessionDate } = useSessionInfo();

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
                key={session.id}
                session={session}
                sessionDate={sessionDate}
                setSessionDate={setSessionDate}
              />
            </>
          );
        })}
    </>
  );
};

PictureDescription.propTypes = {
  sessionInfo: PropTypes.array.isRequired,
};

const SessionInfo = ({ session, sessionDate, setSessionDate }) => {
  return (
    <div key={session.id}>
      <img
        className="float_left"
        src="/darling-pretty1.jpg"
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
        <ShowAvailableTime session={session} setSessionDate={setSessionDate} />
        <Button
          as={Link}
          to="/order/checkout"
          onClick={() => {
            setSessionDate(sessionDate);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

SessionInfo.propTypes = {
  session: PropTypes.object.isRequired,
  sessionDate: PropTypes.date,
  setSessionDate: PropTypes.func.isRequired,
};

export default PictureDescription;

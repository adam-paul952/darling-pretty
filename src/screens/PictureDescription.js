import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import { ShowAvailableTime } from "../Calendar";
import Header from "../components/Header";

const PictureDescription = ({ sessionInfo }) => {
  const { id } = useParams();

  return (
    <>
      <Header />
      {sessionInfo
        .filter((session) => session.id === id)
        .map((session) => {
          return <SessionInfo key={session.id} session={session} />;
        })}
    </>
  );
};

PictureDescription.propTypes = {
  sessionInfo: PropTypes.array.isRequired,
};

const SessionInfo = ({ session }) => {
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
        <ShowAvailableTime session={session} />
        <Button as={Link} to="/order/checkout">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

SessionInfo.propTypes = {
  session: PropTypes.object.isRequired,
};

export default PictureDescription;

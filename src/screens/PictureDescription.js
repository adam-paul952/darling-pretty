import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import { ShowAvailableTimeDay1 } from "../Calendar";
import Header from "../components/Header";

const PictureDescription = ({ sessionInfo }) => {
  const { id } = useParams();
  return (
    <>
      {sessionInfo
        .filter((session) => session.id === id)
        .map((session) => {
          <SessionInfo session={session} />;
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
      <Header />
      <img
        className="float_left"
        src="darling-pretty1.jpg"
        alt=""
        width="450"
        height="350"
      />
      <h2>Price</h2>
      <hr />
      <h3>Date</h3>
      <p>
        <b>{session.date}</b>
      </p>
      <hr />
      <h2>Session Includes:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae
        semper quis lectus nulla at volutpat diam. Lectus urna duis convallis
        convallis tellus. Velit scelerisque in dictum non consectetur a erat. In
        nibh mauris cursus mattis molestie a iaculis at erat. Dictum varius duis
        at consectetur lorem donec massa sapien faucibus. Egestas quis ipsum
        suspendisse ultrices gravida dictum fusce ut placerat. Tincidunt id
        aliquet risus feugiat in ante. Et leo duis ut diam quam. Vestibulum sed
        arcu non odio euismod lacinia. Morbi leo urna molestie at elementum.
      </p>
      <hr />
      <div>
        <ShowAvailableTimeDay1 />
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

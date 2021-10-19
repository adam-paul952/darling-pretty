import { Button, Container } from "react-bootstrap";

import { ShowAvailableTimeDay1 } from "../Calendar";

const PictureDescription = () => {
  return (
    <>
      <Container>
        <img
          className="float_left"
          src="darling-pretty1.jpg"
          alt=""
          width="450"
          height="350"
        />
      </Container>
      <br />
      <h2>Price</h2>
      <hr />
      <h3>Date</h3>
      <p>
        <b>November 27, 2021</b>
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
      <ShowAvailableTimeDay1 />
      <div className="d-grid gap-2">
        <Button className="mt-4">Add to Cart</Button>
      </div>
    </>
  );
};

export default PictureDescription;

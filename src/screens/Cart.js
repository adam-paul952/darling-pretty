import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Paypal from "../components/Paypal";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <Button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout
        </Button>
      )}
    </div>
  );
};

export default Cart;

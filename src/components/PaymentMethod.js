import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Paypal from "./Paypal";

const PaymentMethod = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <div>
          <Button
            className="centerButton"
            onClick={() => {
              setCheckout(true);
            }}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;

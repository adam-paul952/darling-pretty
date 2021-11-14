import React, { useEffect, useRef } from "react";

const Paypal = () => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        // eslint-disable-next-line
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Pictures",
                amount: {
                  currency_code: "CAD",
                  value: 160.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div className="centerButton" ref={paypal}></div>
    </div>
  );
};

export default Paypal;

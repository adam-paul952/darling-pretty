import React from "react";

import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

interface IPaypalProps {
  price: string;
  sessionName: string;
  setStatus: React.Dispatch<any>;
}

const Paypal: React.FC<IPaypalProps> = (props) => {
  const { price, sessionName, setStatus } = props;

  const [{ options, isPending }] = usePayPalScriptReducer();

  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
        style={{ layout: "vertical" }}
        // disabled={true}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  description: sessionName,
                  amount: {
                    currency_code: options.currency,
                    value: price.slice(1),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={async (data, actions) => {
          return await actions.order!.capture().then(async (details) => {
            if (details.status === "COMPLETED") {
              setStatus({ status: details.status, orderId: details.id });
            }
          });
        }}
        onError={(err) => {
          alert(`There has been an error: ${err}`);
        }}
      />
    </>
  );
};

export default Paypal;

import React from "react";
// Paypal
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

interface IPaypalProps {
  price: string;
  sessionName: string;
  isComplete: boolean;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const Paypal = (props: IPaypalProps) => {
  const [{ options, isPending }] = usePayPalScriptReducer();

  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
        className="paypal-button-container"
        style={{ layout: "vertical" }}
        disabled={true}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  description: props.sessionName,
                  amount: {
                    currency_code: options.currency,
                    value: props.price.slice(1),
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
              props.setComplete(!props.isComplete);
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

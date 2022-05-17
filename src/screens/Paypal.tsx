import React from "react";
import useAWSData, { IClientInfo, ISessionInfo } from "../hooks/useAWSData";

import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

interface IPaypalProps {
  price: string;
  session: ISessionInfo;
  client: IClientInfo;
}

const Paypal = (props: IPaypalProps) => {
  const [{ options, isPending }] = usePayPalScriptReducer();
  const { createNewClient } = useAWSData();
  const { name } = props.session;

  const addClientToDatabase = async () => {
    try {
      return await createNewClient(props.client);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
        className="paypal-button-container"
        style={{ layout: "vertical" }}
        // disabled={true}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  description: name,
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
          return await actions.order!.capture().then(async () => {
            await addClientToDatabase();
            alert(`Transaction complete, you should receive a reciept shortly`);
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

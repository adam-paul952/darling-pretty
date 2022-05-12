import React from "react";
import useAWSData, { IClientInfo, ISessionInfo } from "../hooks/useAWSData";

import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

interface IPaypalProps {
  price: string;
  session: ISessionInfo;
  client: IClientInfo;
}

const Paypal = (props: IPaypalProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { createNewClient } = useAWSData();
  const { name } = props.session;

  const [transactionComplete, setTransactionComplete] = React.useState(false);

  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient(props.client);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (transactionComplete) {
      alert(`Transaction complete, you should receive a reciept shortly`);
      setTimeout(() => setTransactionComplete(false), 3000);
    }
  }, [transactionComplete]);

  return (
    <div className="container my-4">
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
        className="flex justify-center"
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
            // const name = details.payer.name!.given_name;
            // console.log(`Data from the approval of PayPal is: `, data);
            await addClientToDatabase();
            setTransactionComplete(true);
            // alert(`Transaction completed by ${name}\nDetails: ${details}`);
          });
        }}
        onError={(err) => {
          alert(`There has been an error: ${err}`);
        }}
      />
    </div>
  );
};

export default Paypal;

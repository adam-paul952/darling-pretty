import React from "react";
import useAWSData, {
  IBookingInfo,
  IClientInfo,
  ISessionInfo,
} from "../hooks/useAWSData";

import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import moment from "moment";

interface IPaypalProps {
  price: string;
  session: ISessionInfo;
  client: IClientInfo;
  sessionTime: Date;
}

const Paypal = (props: IPaypalProps) => {
  const [{ options, isPending }] = usePayPalScriptReducer();
  const { createNewClient, updateBookingWithClient } = useAWSData();

  const { id, name, availableTimes, bookings } = props.session;
  const { firstName, lastName } = props.client;
  // Determine if transaction was completed
  const [isComplete, setComplete] = React.useState<boolean>(false);

  const sessionTime = moment(props.sessionTime).format("hh:mm");

  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient(props.client);
      const editAvailableTimes = availableTimes.filter(
        (time: string) => time !== sessionTime
      );
      const bookingDetails: IBookingInfo = {
        clientId: newClient.id,
        clientName: `${firstName} ${lastName}`,
        startTime: sessionTime,
      };
      return { bookingDetails, editAvailableTimes };
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  React.useEffect(() => {
    const handleSessionUpdate = async () => {
      if (isComplete) {
        try {
          const { bookingDetails, editAvailableTimes } =
            await addClientToDatabase();
          await updateBookingWithClient({
            id: id!,
            bookings: [...bookings!, bookingDetails],
            availableTimes: editAvailableTimes,
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleSessionUpdate();
    //eslint-disable-next-line
  }, [isComplete]);

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
          return await actions.order!.capture().then(async (details) => {
            console.log(`Details from paypal accept: `, details);
            if (details.status === "COMPLETED") {
              setComplete(!isComplete);
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

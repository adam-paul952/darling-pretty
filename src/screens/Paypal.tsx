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
  const { name } = props.session;

  const [isComplete, setComplete] = React.useState<boolean>(false);

  const { firstName, lastName } = props.client;
  const sessionTime = moment(props.sessionTime).format("hh:mm");
  const sessionEndTime = moment(props.sessionTime)
    .add(props.session.sessionLength, "m")
    .format("hh:mm");

  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient(props.client);
      return newClient;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  const onUpdateBooking = async (clientId: string) => {
    const editAvailableTimes = props.session.availableTimes.filter(
      (time: string) => time !== sessionTime
    );
    const bookingDetails: IBookingInfo = {
      clientId: clientId,
      clientName: `${firstName} ${lastName}`,
      startTime: sessionTime,
      endTime: sessionEndTime,
    };
    return { bookingDetails, editAvailableTimes };
  };

  React.useEffect(() => {
    console.log(`Transaction complete: `, isComplete);
  }, [isComplete]);

  // React.useEffect(() => {
  //   const updateArray = () => {
  //     const editAvailableTimes = props.session.availableTimes.filter(
  //       (time: string) => time !== sessionTime
  //     );
  //     console.log(props.session.availableTimes);
  //     console.log(editAvailableTimes);
  //   };
  //   updateArray();
  // }, []);

  React.useEffect(() => {
    const handleSessionUpdate = async () => {
      // if (isComplete) {
      try {
        const newClient = await addClientToDatabase();
        // const newClient = { id: "1" };
        const { bookingDetails, editAvailableTimes } = await onUpdateBooking(
          newClient.id
        );
        const updatedSession = await updateBookingWithClient({
          id: props.session.id!,
          bookings: [...props.session.bookings!, bookingDetails],
          availableTimes: editAvailableTimes,
        });
        console.log(`Updated session from paypal: `, updatedSession);
      } catch (error) {
        console.log(error);
      }
      // }
    };
    handleSessionUpdate();
  }, []);

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

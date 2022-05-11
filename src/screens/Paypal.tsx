import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from "react-bootstrap";
import useAWSData, { IClientInfo, ISessionInfo } from "../hooks/useAWSData";

interface IPaypalProps {
  price: string;
  session: ISessionInfo;
  client: IClientInfo;
}

const Paypal = (props: IPaypalProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { createNewClient } = useAWSData();
  const { name } = props.session;

  const addClientToDatabase = async () => {
    try {
      const newClient = await createNewClient(props.client);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="my-4 w-50">
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
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
            // alert(`Transaction completed by ${name}\nDetails: ${details}`);
          });
        }}
        onError={(err) => {
          alert(`There has been an error: ${err}`);
        }}
      />
    </Container>
  );
};

export default Paypal;

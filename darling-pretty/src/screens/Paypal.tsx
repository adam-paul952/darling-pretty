import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  const [{ isPending }] = usePayPalScriptReducer();
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons
        style={{ layout: "vertical" }}
        disabled={false}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Pictures",
                amount: {
                  value: "100.00",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order!.capture();
          const name = details.payer.name.given_name;
          alert(`Transaction completed by ${name}`);
        }}
      />
    </>
  );
};

export default Paypal;

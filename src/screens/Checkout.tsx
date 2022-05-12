// Components
import { useLocation } from "react-router-dom";
import Paypal from "./Paypal";
// Types
import { LocationProps } from "../screens/Register";
import { IClientInfo } from "../hooks/useAWSData";
interface ILocationCheckout extends LocationProps {
  clientInfo: IClientInfo;
}

const Checkout = () => {
  const { session, sessionTime, clientInfo } = useLocation()
    .state as ILocationCheckout;

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="my-5">
        <div className="flex flex-col text-center my-1">
          When: {session.date}
        </div>
        <div className="flex flex-col text-center my-1">
          What time: {sessionTime.toTimeString().slice(0, 5)}
          {sessionTime.getHours() < 12 ? "AM" : "PM"}
        </div>
        <div className="flex flex-col text-center my-1">
          Price: {session.price}
        </div>
        <div className="flex flex-col text-center my-1">
          Who: {clientInfo.firstName} {clientInfo.lastName}
        </div>
      </div>
      <Paypal
        price={session.price!.toString()}
        session={session}
        client={clientInfo}
      />
    </div>
  );
};

export default Checkout;

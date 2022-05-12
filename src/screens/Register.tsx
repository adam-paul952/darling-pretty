import React from "react";
// Components
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ClientInformation from "./contactInfo/ContactInformation";
import BillingInformation from "./contactInfo/BillingInformation";
import ClientInformationStatus from "../components/ClientInformationStatus";
//Hooks
import { useLocation } from "react-router-dom";
import { IClientInfo, ISessionInfo } from "../hooks/useAWSData";
import TailwindCSSButton from "../components/visual/TailwindCSSButton";
// Types
export interface LocationProps {
  session: ISessionInfo;
  sessionTime: Date;
}
// Initial Client State
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  addressOne: "",
  addressTwo: "",
  city: "",
  postalCode: "",
  province: "Newfoundland and Labrador",
  country: "Canada",
};

const Register = () => {
  const { session, sessionTime } = useLocation().state as LocationProps;

  const [newClient, setNewClient] = React.useState<IClientInfo>(initialState);

  const [showClientContact, setShowClientContact] = React.useState(true);
  const [showClientAddress, setShowClientAddress] = React.useState(false);

  React.useEffect(() => {
    console.log(`New Client from signup: `, newClient);
  }, [newClient]);

  return (
    <>
      <Header title="Confirm Details" />
      <div className=" my-3">
        {showClientContact && (
          <div className="flex flex-col">
            <ClientInformation
              newClient={newClient}
              setNewClient={setNewClient}
              showClientAddress={showClientAddress}
              setShowClientAddress={setShowClientAddress}
              showClientContact={showClientContact}
              setShowClientContact={setShowClientContact}
            />
          </div>
        )}
        {!showClientContact && (
          <ClientInformationStatus title="Contact Information" />
        )}
        {showClientAddress && (
          <BillingInformation
            newClient={newClient}
            setNewClient={setNewClient}
            showClientAddress={showClientAddress}
            setShowClientAddress={setShowClientAddress}
          />
        )}
        {!showClientAddress && !showClientContact && (
          <ClientInformationStatus
            title="Billing Information"
            complete={true}
          />
        )}
        {!showClientAddress && !showClientContact && (
          <div className="container flex flex-1 my-5 justify-center">
            <Link
              className="no-underline w-full text-center"
              to="/checkout"
              state={{
                session: session,
                sessionTime: sessionTime,
                clientInfo: newClient,
              }}
            >
              <TailwindCSSButton
                buttonTitle="Continue to Checkout"
                onClick={() => {}}
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;

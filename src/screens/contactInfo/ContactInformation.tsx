import React from "react";
// Components
import TailwindCSSFormInput from "../../components/TailwindFormInput";
import TailwindCSSButton from "../../components/visual/TailwindCSSButton";
// Hooks
import { IClientInfo } from "../../hooks/useAWSData";
// Helpers
import { formatPhoneNumber } from "../../util/formatStrings";
//Types
export interface IClientInfoProps {
  newClient: IClientInfo;
  setNewClient: React.Dispatch<React.SetStateAction<IClientInfo>>;
  showClientAddress?: boolean;
  setShowClientAddress?: React.Dispatch<React.SetStateAction<boolean>>;
  showClientContact?: boolean;
  setShowClientContact?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientInformation: React.FC<IClientInfoProps> = ({
  newClient,
  setNewClient,
  showClientAddress,
  setShowClientAddress,
  showClientContact,
  setShowClientContact,
}) => {
  const { firstName, lastName, email, phoneNumber } = newClient;

  const handleClick = () => {
    setShowClientAddress!(!showClientAddress);
    setShowClientContact!(!showClientContact);
  };

  return (
    <form>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="firstName"
            label="First Name "
            placeHolder="First Name"
            value={firstName}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, firstName: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="lastName"
            label="Last Name "
            placeHolder="Last Name"
            value={lastName}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, lastName: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="email"
            label="Email "
            placeHolder="john.doe@email.com"
            value={email}
            type="email"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, email: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="phoneNumber"
            label="Phone "
            placeHolder="(555)555-5555"
            value={phoneNumber}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({
                ...newClient,
                phoneNumber: formatPhoneNumber(e.target.value),
              });
            }}
          />
        </div>
      </div>
      <div className="ml-9 pl-3">
        <TailwindCSSButton
          buttonTitle="Save Contact Info"
          onClick={() => handleClick()}
          disabled={!firstName || !lastName || !email || !phoneNumber}
        />
      </div>
    </form>
  );
};

export default ClientInformation;

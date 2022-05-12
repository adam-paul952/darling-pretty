import React from "react";
// Components
import TailwindCSSFormInput from "../../components/TailwindFormInput";
import TailwindCSSButton from "../../components/visual/TailwindCSSButton";
// Types
import { IClientInfoProps } from "./ContactInformation";
interface IBillingInfoProps extends IClientInfoProps {}

const BillingInformation: React.FC<IBillingInfoProps> = ({
  newClient,
  setNewClient,
  showClientAddress,
  setShowClientAddress,
}) => {
  const {
    addressOne,
    addressTwo,
    city,
    postalCode,
    // province,
    // country
  } = newClient;

  const handleClick = () => {
    setShowClientAddress!(!showClientAddress);
  };

  return (
    <form>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="addressOne"
            label="Address "
            placeHolder="1234 Main St"
            value={addressOne}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, addressOne: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="address2"
            label="Address 2 "
            placeHolder="Apartment, studio, or floor"
            value={addressTwo!}
            type="text"
            required={false}
            onChange={(e: any) => {
              setNewClient({ ...newClient, addressTwo: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="city"
            label="City "
            placeHolder="1234 Main St"
            value={city}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, city: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="province"
            label="Province "
            value="Newfoundland and Labrador"
            type="text"
            required={false}
            disabled={true}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="postalCode"
            label="Postal Code "
            placeHolder="A1A1A1"
            value={postalCode}
            type="text"
            required
            onChange={(e: any) => {
              setNewClient({ ...newClient, postalCode: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-5/12">
          <TailwindCSSFormInput
            id="country"
            label="Country "
            value="Canada"
            required={false}
            disabled={true}
          />
        </div>
      </div>
      <div className="ml-9 pl-3">
        <TailwindCSSButton
          buttonTitle="Complete Billing Info Input"
          onClick={() => handleClick()}
        />
      </div>
    </form>
  );
};

export default BillingInformation;

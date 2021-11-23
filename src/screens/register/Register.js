import React, { useEffect, useState } from "react";

import useClientInfo from "../../utils/useClientInfo";

import ShippingInformation from "./ShippingInfo";
import ContactInformation from "./ContactInfo";

const RegisterUser = () => {
  const { createClientData } = useClientInfo();

  const [showAddressInfo, setShowAddressInfo] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    name: { firstName: "", lastName: "" },
    phoneNumber: "",
    billing: {
      address1: "",
      address2: "",
      city: "",
      province: "NL",
      postalCode: "",
      country: "Canada",
    },
  });

  const handleSubmit = () => {
    createClientData(clientInfo);
  };

  useEffect(() => {
    console.log(clientInfo);
  }, [clientInfo]);
  return (
    <>
      <ContactInformation
        clientInfo={clientInfo}
        setClientInfo={setClientInfo}
        showAddressInfo={showAddressInfo}
        setShowAddressInfo={setShowAddressInfo}
      />
      {showAddressInfo && (
        <>
          <ShippingInformation
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};

export default RegisterUser;

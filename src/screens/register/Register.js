import { useEffect, useState } from "react";

import Header from "../../components/Header";
import useClientInfo from "../../utils/useClientInfo";

import ShippingInformation from "./ShippingInfo";
import ContactInformation from "./ContactInfo";
import LoginInformation from "./LoginInformation";

const RegisterUser = () => {
  const { createClientData } = useClientInfo();

  const [clientInfo, setClientInfo] = useState({
    login: { email: "", password: "" },
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
      <Header title="Register" />
      <LoginInformation clientInfo={clientInfo} setClientInfo={setClientInfo} />
      <ContactInformation
        clientInfo={clientInfo}
        setClientInfo={setClientInfo}
      />
      <hr />
      <ShippingInformation
        clientInfo={clientInfo}
        setClientInfo={setClientInfo}
        handleSubmit={handleSubmit}
      />
      <hr />
    </>
  );
};

export default RegisterUser;

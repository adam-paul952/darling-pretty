import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/Header";
import Loading from "../components/Loading";
import ContactInformation from "./register/ContactInfo";
import ShippingInformation from "./register/ShippingInfo";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <>
        <Header />
        <div style={{ height: "120px", textAlign: "center" }} className="mt-3">
          <img
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            src={picture}
            alt={name}
          />
        </div>
        <div style={{ height: "100px", textAlign: "center" }} className="mt-3">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
        <ContactInformation
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
        />
        <ShippingInformation
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
        />
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4 mt-3">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </>
    )
  );
};

export default Profile;

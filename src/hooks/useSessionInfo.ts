import React from "react";

interface ClientInfoName {
  firstName: string;
  lastName: string;
}

interface ClientInfoContact {
  email: string;
  phoneNumber: string;
}

interface ClientInfoBilling {
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

interface ClientInfoBookingDetails {
  sessionDate: string;
  //   // sessionTime: string;
  lengthOfSession: string;
}

export interface ClientInfoProps {
  name: ClientInfoName;
  contact: ClientInfoContact;
  billing: ClientInfoBilling;
  bookingDetails: ClientInfoBookingDetails;
}

const useSessionInfo = () => {
  const [sessionDate, setSessionDate] = React.useState<Date | null>();
  const [sessionTime, setSessionTime] = React.useState<string>("");
  const [sessionPrice, setSessionPrice] = React.useState(0);

  const [clientInfo, setClientInfo] = React.useState<ClientInfoProps>({
    name: { firstName: "", lastName: "" },
    contact: { email: "", phoneNumber: "" },
    billing: {
      address1: "",
      address2: "",
      city: "",
      province: "NL",
      postalCode: "",
      country: "Canada",
    },
    bookingDetails: { sessionDate: "", lengthOfSession: "" },
  });

  return {
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime,
    sessionPrice,
    setSessionPrice,
    clientInfo,
    setClientInfo,
  };
};

export default useSessionInfo;

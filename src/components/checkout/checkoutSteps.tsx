import React from "react";

import ReviewOrder from "./ReviewOrder";
import ClientInformation from "./ContactInformation";
import BillingInformation from "./BillingInformation";

export const getStepContent = (
  step: number,
  clientState?: any,
  setClientState?: any,
  order?: any
) => {
  switch (step) {
    case 0:
      return (
        <ClientInformation
          newClient={clientState}
          setNewClient={setClientState}
        />
      );
    case 1:
      return (
        <BillingInformation
          newClient={clientState}
          setNewClient={setClientState}
        />
      );
    case 2:
      return <ReviewOrder order={order} client={clientState} />;
    default:
      throw new Error("Unknown step");
  }
};

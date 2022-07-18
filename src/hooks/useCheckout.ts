import React from "react";

import { IClientInfo } from "./useClientInfo";
import { initialClientState } from "../constants/checkout";

const useCheckout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const [clientDetails, setClientDetails] =
    React.useState<IClientInfo>(initialClientState);

  const filterAvailableTimes = (
    arrayOfAvailableTimes: string[],
    startTime: string
  ) => {
    const filtered: string[] = arrayOfAvailableTimes.filter(
      (time) => time !== startTime
    );

    return filtered;
  };

  // Determine if transaction was completed
  const [orderStatus, setStatus] = React.useState<{
    status: string;
    orderId: string;
  }>({
    status: "",
    orderId: "",
  });

  return {
    activeStep,
    setActiveStep,
    handleNext,
    clientDetails,
    setClientDetails,
    filterAvailableTimes,
    orderStatus,
    setStatus,
  };
};

export default useCheckout;

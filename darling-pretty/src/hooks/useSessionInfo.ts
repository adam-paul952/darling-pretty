import React from "react";

const useSessionInfo = () => {
  const [sessionDate, setSessionDate] = React.useState<null | Date | undefined>(
    null
  );
  const [sessionTime, setSessionTime] = React.useState(null);
  const [sessionPrice, setSessionPrice] = React.useState(0);

  return {
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime,
    sessionPrice,
    setSessionPrice,
  };
};

export default useSessionInfo;

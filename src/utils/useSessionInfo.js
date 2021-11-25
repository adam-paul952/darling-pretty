import { useState, useEffect } from "react";

const useSessionInfo = () => {
  const [sessionDate, setSessionDate] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const [sessionPrice, setSessionPrice] = useState(0);

  //   useEffect(() => {
  //     console.log(sessionDate);
  //     console.log(sessionDate);
  //   }, [sessionDate]);
  console.log(sessionDate);

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

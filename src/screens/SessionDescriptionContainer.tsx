import React from "react";
import { useLocation, useParams } from "react-router-dom";

import SessionDescription from "../components/SessionDescription";

import { ISessionInfo } from "../hooks/useSessionInfo";

type LocationPropsT = {
  session: ISessionInfo;
};

const SessionDescriptionContainer: React.FC = () => {
  const { session } = useLocation().state as LocationPropsT;
  const { id } = useParams();

  return (
    <>
      <SessionDescription key={id} session={session} />
    </>
  );
};

export default SessionDescriptionContainer;

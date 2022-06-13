import React from "react";
import { useLocation, useParams } from "react-router-dom";
//Components
import Header from "../components/Header";
import SessionInfo from "../components/SessionDescriptionContainer";
//Types
import { ISessionInfo } from "../hooks/useAWSData";
type LocationPropsT = {
  session: ISessionInfo;
};

const SessionDescription = () => {
  const { session } = useLocation().state as LocationPropsT;

  const { id } = useParams();

  return (
    <>
      <Header title={session.date} />
      <SessionInfo key={id} session={session} />
    </>
  );
};

export default SessionDescription;

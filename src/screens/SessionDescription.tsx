//Router
import { useLocation, useParams } from "react-router-dom";
//Components
import Header from "../components/Header";
import SessionInfo from "../components/SessionDescriptionContainer";
// Hooks
import useSessionInfo from "../hooks/useSessionInfo";
//Types
import { ISessionInfo } from "../hooks/useAWSData";
type LocationPropsT = {
  session: ISessionInfo;
};

const SessionDescription = () => {
  const { setSessionDate } = useSessionInfo();
  const { session } = useLocation().state as LocationPropsT;

  const { id } = useParams();

  return (
    <>
      <Header title={session.date} />
      <SessionInfo key={id} session={session} setSessionDate={setSessionDate} />
    </>
  );
};

export default SessionDescription;

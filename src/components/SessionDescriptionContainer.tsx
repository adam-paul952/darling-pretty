import React from "react";
//Router
import { Link } from "react-router-dom";
//Components
import ShowAvailableTime from "../components/Calendar";
// Images
import darlingPretty from "../images/darling-pretty1.jpg";
// Date FNS
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
//Types
import { ISessionInfo } from "../hooks/useAWSData";
interface Session {
  session: ISessionInfo;
  setSessionDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  setStartDate?: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
}

const SessionInfo: React.FC<Session> = ({ session, setSessionDate }) => {
  const startHour: number = parseInt(
    session.startTime.slice(0, 2).padStart(2, "0"),
    10
  );
  const startMinute: number = parseInt(session.startTime.slice(3, 5), 10);
  const [startDate, setStartDate] = React.useState<Date>(
    setHours(setMinutes(new Date(session.date), startMinute), startHour)
  );

  return (
    <div key={session.id} className="container flex flex-col mt-2">
      <div className="container flex flex-row">
        <div className="flex flex-col w-1/2 items-center">
          <img
            className="float_left"
            src={darlingPretty}
            alt="Darling-Pretty logo"
            width="450"
            height="350"
          />
        </div>
        <div className="flex flex-col w-1/2 justify-center">
          <h2>Price</h2>
          <p>{session.price}</p>
          <hr className="w-1/4" />
          <h3>Date</h3>
          <p>{session.date}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row">
        <div className="flex flex-col w-2/3 px-1">
          <h2>Session Includes:</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: session.sessionDetails,
            }}
          />
          <hr />
        </div>
        <div className="flex flex-col items-center mx-auto">
          <p>Available Times:</p>
          <ShowAvailableTime
            key={session.id}
            session={session}
            setSessionDate={setSessionDate}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          <button className="bg-gray-300 p-2 rounded-xl w-fit">
            <Link
              className="no-underline text-black text-lg"
              to="/register"
              state={{
                session: session,
                sessionTime: startDate,
              }}
            >
              Add to Cart
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionInfo;

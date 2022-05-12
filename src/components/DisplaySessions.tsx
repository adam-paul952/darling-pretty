import React from "react";
// Components
import TailwindCSSCard from "./visual/Card";
// Image
import darlingPretty from "../images/darling-pretty1.jpg";
// Hooks
import useAWSDatastore, { ISessionInfo } from "../hooks/useAWSData";
import { addDays } from "date-fns";

const ShowAvailablePhotos = () => {
  const [sessions, setSessions] = React.useState<ISessionInfo[]>([]);
  const { listAllSessions } = useAWSDatastore();

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await listAllSessions();
        const arrangeDate = allSessions
          .map((session: any) => {
            const date = addDays(new Date(session.date), 1)
              .toString()
              .slice(0, 15)
              .replace(" ", ", ");
            return {
              ...session,
              date: date,
              price: `$${session.price}.00`,
            };
          })
          .sort(
            (a: ISessionInfo, b: ISessionInfo) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        setSessions(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
  }, []);

  return (
    <>
      {sessions.map((session: ISessionInfo) => {
        return (
          <div key={session.id} className="w-50">
            <TailwindCSSCard
              title={session.name}
              date={session.date}
              price={session.price}
              image={darlingPretty}
              imageAlt="Darling Pretty Logo"
              link={`/photo/${session.id}`}
              state={{ session: session }}
            />
          </div>
        );
      })}
    </>
  );
};

export default ShowAvailablePhotos;

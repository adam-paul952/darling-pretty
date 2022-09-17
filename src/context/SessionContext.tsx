import React from "react";

import moment from "moment";

import useSessionInfo, { ISessionInfo } from "../hooks/useSessionInfo";

const SessionContext = React.createContext({});

const useSessionContext = () => {
  const { getAllSessions } = useSessionInfo();
  const [sessions, setSessions] = React.useState<ISessionInfo[] | null>(null);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const allSessions = await getAllSessions();
        const arrangeDate = allSessions
          .sort(
            (a: ISessionInfo, b: ISessionInfo) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .map((session: ISessionInfo) => {
            const date = moment(session.date).format("ddd, MMMM Do YYYY");
            return {
              ...session,
              date: date,
              price: `$${session.price}.00`,
              sessionImage: {
                name: `https://${session.sessionImage.bucket}.s3.amazonaws.com/${session.sessionImage.key}`,
              },
            };
          });

        setSessions(arrangeDate);
        // console.log(arrangeDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { sessions, setSessions };
};

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const { sessions, setSessions } = useSessionContext();
  return (
    <SessionContext.Provider value={{ sessions, setSessions }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, useSessionContext };

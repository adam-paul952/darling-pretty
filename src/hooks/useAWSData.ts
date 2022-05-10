import { API, graphqlOperation } from "aws-amplify";
import { createSession } from "../graphql/mutations";
import { listSessions } from "../graphql/queries";

export interface ISessionInfo {
  id?: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  sessionLength: number | undefined;
  sessionInfo: string;
  price: number | undefined;
  sessionDetails: string;
  availableTimes: string[];
}

export interface IBookingInfo {
  sessionID: string;
  title: string;
}

const useAWSDatastore = () => {
  //Session create
  const createNewSession = async (newSession: ISessionInfo) => {
    try {
      const sessionDetails = {
        name: newSession.name,
        date: newSession.date,
        startTime: newSession.startTime,
        endTime: newSession.endTime,
        sessionLength: newSession.sessionLength,
        sessionInfo: newSession.sessionInfo,
        price: newSession.price,
        sessionDetails: newSession.sessionDetails,
        availableTimes: newSession.availableTimes,
      };
      const session = await API.graphql(
        graphqlOperation(createSession, { input: sessionDetails })
      );
      console.log(`Session from hook is:`, session);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const listAllSessions = async () => {
    try {
      const allSessions: any = await API.graphql(
        graphqlOperation(listSessions)
      );
      return allSessions.data.listSessions.items;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  // // Session Query
  // const models = await DataStore.query(Session);
  // console.log(models);
  // // Session Delete
  // const modelToDelete = await DataStore.query(Session, '123456789');
  // DataStore.delete(modelToDelete);

  // Booking create
  // await DataStore.save(
  //     new Bookings({
  //         "title": "Lorem ipsum dolor sit amet",
  //         "sessionID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
  //         "Session": /* Provide a Session instance here */
  //     })
  // );

  // // Booking query
  // const models = await DataStore.query(Bookings);
  // console.log(models);

  // // Booking Delete
  // const modelToDelete = await DataStore.query(Bookings, '123456789');
  // DataStore.delete(modelToDelete);
  return {
    createNewSession,
    listAllSessions,
  };
};

export default useAWSDatastore;

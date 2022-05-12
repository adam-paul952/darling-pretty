import { API, graphqlOperation } from "aws-amplify";
import { createSession, createClients } from "../graphql/mutations";
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

export interface IClientInfo {
  id?: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  addressOne: string;
  addressTwo?: string | null;
  city: string;
  postalCode: string;
  province: string;
  country: string;
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
  // Get list of all sessions
  const listAllSessions = async () => {
    try {
      const allSessions: any = await API.graphql(
        graphqlOperation(listSessions)
      );
      return allSessions.data.listSessions.items;
    } catch (error: any) {
      console.log(error);
      // throw new Error(error);
    }
  };
  // Create New Client
  const createNewClient = async (newClient: IClientInfo) => {
    try {
      const client = await API.graphql(
        graphqlOperation(createClients, { input: newClient })
      );
      console.log(client);
      return client;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createNewSession,
    listAllSessions,
    createNewClient,
  };
};

export default useAWSDatastore;

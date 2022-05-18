import { API, graphqlOperation } from "aws-amplify";
import {
  createSession,
  updateSession,
  createClients,
} from "../graphql/mutations";
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
  bookings?: IBookingInfo[];
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

interface IUpdateSessionWithClientProps {
  id: string;
  bookings: IBookingInfo[];
  availableTimes: string[];
}

export interface IBookingInfo {
  clientId: string;
  clientName: string;
  startTime: string;
  endTime: string;
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
        bookings: [],
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
  // Update Session with Booking less Available time
  const updateBookingWithClient = async (
    updatedSessionDetails: IUpdateSessionWithClientProps
  ) => {
    try {
      // console.log(`UpdatedSessionDetails from hook: `, updatedSessionDetails);
      const updatedSession: any = await API.graphql(
        graphqlOperation(updateSession, { input: updatedSessionDetails })
      );
      return updatedSession;
    } catch (error) {
      console.log(error);
    }
  };
  // Create New Client
  const createNewClient = async (newClient: IClientInfo) => {
    try {
      const client: any = await API.graphql(
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
    updateBookingWithClient,
  };
};

export default useAWSDatastore;

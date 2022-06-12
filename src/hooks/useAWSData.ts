import { API, graphqlOperation } from "aws-amplify";
import {
  createSessions,
  updateSessions,
  createClients,
} from "../graphql/mutations";
import { getSessions, listSessions } from "../graphql/queries";
import { listSessionsWithBookings } from "../graphql/customQueries";

export interface ISessionInfo {
  id?: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  sessionLength: number;
  sessionInfo: string;
  price: number | undefined;
  sessionDetails: string;
  availableTimes: string[];
  bookings?: IBookingInfo[];
  _version?: number;
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
  version: number;
}

export interface IBookingInfo {
  clientId: string;
  clientName: string;
  startTime: string;
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
        graphqlOperation(createSessions, { input: sessionDetails })
      );
      console.log(`Session from hook is:`, session);
    } catch (error: any) {
      // throw new Error(error);
      console.log(error);
    }
  };
  // Get list of all sessions
  const listAllSessions = async () => {
    try {
      const allSessions: any = await API.graphql(
        graphqlOperation(listSessionsWithBookings)
      );
      return allSessions.data.listSessions.items;
    } catch (error: any) {
      console.log(error);
      // throw new Error(error);
    }
  };
  // Query Session by ID
  const getSessionById = async (sessionId: string) => {
    try {
      const session: any = await API.graphql(
        graphqlOperation(getSessions, { id: sessionId })
      );
      return session.data.getSessions;
    } catch (error) {
      console.log(error);
    }
  };
  // Admin update Session
  const adminUpateSession = async (session: ISessionInfo) => {
    try {
      const updateSession: any = await API.graphql(
        graphqlOperation(updateSessions, {
          input: {
            session,
          },
        })
      );
      return updateSession;
    } catch (error) {
      console.log(error);
    }
  };
  // Update Session with Booking less Available time
  const updateBookingWithClient = async (
    updatedSessionDetails: IUpdateSessionWithClientProps
  ) => {
    const { id, bookings, availableTimes, version } = updatedSessionDetails;
    try {
      console.log(`UpdatedSessionDetails from hook: `, updatedSessionDetails);
      const updatedSession: any = await API.graphql(
        graphqlOperation(updateSessions, {
          input: {
            id: id,
            bookings: bookings,
            availableTimes: availableTimes,
          },
        })
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
      return client.data.createClients;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createNewSession,
    listAllSessions,
    getSessionById,
    createNewClient,
    updateBookingWithClient,
    adminUpateSession,
  };
};

export default useAWSDatastore;

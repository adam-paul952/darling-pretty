import { API, graphqlOperation } from "aws-amplify";
import {
  createSession,
  updateSession,
  createClients,
} from "../graphql/mutations";
import { getSession } from "../graphql/queries";
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
        // _version: 1,
      };
      const session = await API.graphql(
        graphqlOperation(createSession, { input: sessionDetails })
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
        graphqlOperation(getSession, { id: sessionId })
      );
      return session.data.getSession;
    } catch (error) {
      console.log(error);
    }
  };
  // Update Session with Booking less Available time
  const updateBookingWithClient = async (
    updatedSessionDetails: IUpdateSessionWithClientProps
  ) => {
    const { id, bookings, availableTimes } = updatedSessionDetails;
    try {
      // console.log(`UpdatedSessionDetails from hook: `, updatedSessionDetails);
      const updatedSession: any = await API.graphql(
        graphqlOperation(updateSession, {
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
  };
};

export default useAWSDatastore;

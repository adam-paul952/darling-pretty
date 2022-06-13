import { API, graphqlOperation, Storage } from "aws-amplify";
import {
  createSessions,
  updateSessions,
  createClients,
  deleteContact,
} from "../graphql/mutations";
import {
  getSessions,
  listContacts,
  listSessions,
  listClients,
} from "../graphql/queries";
import {
  listSessionsWithBookings,
  listSessionsWithDates,
} from "../graphql/customQueries";
import awsmobile from "../aws-exports";

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
  sessionImage: ImageUploadT;
  availableTimes: string[];
  bookings?: IBookingInfo[];
  _version?: number;
}

export type ImageUploadT = {
  name: string;
  bucket?: string;
  region?: string;
  key?: string;
  mimeType: string;
};

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
  sessionBooked?: string;
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
    const { name, mimeType } = newSession.sessionImage;
    const imageDetails = {
      name,
      mimeType,
      bucket: awsmobile.aws_user_files_s3_bucket,
      region: awsmobile.aws_user_files_s3_bucket_region,
      key: `public/${name}`,
    };
    try {
      await uploadImageToStorage(newSession.sessionImage);
      const sessionDetails = {
        name: newSession.name,
        date: newSession.date,
        startTime: newSession.startTime,
        endTime: newSession.endTime,
        sessionLength: newSession.sessionLength,
        sessionInfo: newSession.sessionInfo,
        price: newSession.price,
        sessionDetails: newSession.sessionDetails,
        sessionImage: imageDetails,
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
  const listSessionDates = async () => {
    try {
      const sessionDates: any = await API.graphql(
        graphqlOperation(listSessions)
      );
      console.log(sessionDates.data.listSessions.items);
      // return sessionDates.data.listSessions.items.map((date: any) => {
      //   return date.date;
      // });
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
  //List All Clients
  const listAllClients = async () => {
    try {
      const clients: any = await API.graphql(graphqlOperation(listClients));
      return clients.data.listClients.items;
    } catch (error) {
      console.log(error);
    }
  };
  // Query Contact form entries
  const getContactFormSubmissions = async () => {
    try {
      const contactFormEntries: any = await API.graphql(
        graphqlOperation(listContacts)
      );
      return contactFormEntries.data.listContacts.items;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactFormSubmission = async (id: string) => {
    try {
      const removeContactEntry: any = await API.graphql(
        graphqlOperation(deleteContact, { input: { id } })
      );
      return removeContactEntry;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageToStorage = async (imageData: any) => {
    try {
      await Storage.put(imageData.name, imageData, {
        contentType: imageData.mimeType,
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      console.log(`Image successfully uploaded to S3`);
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
    getContactFormSubmissions,
    deleteContactFormSubmission,
    listSessionDates,
    listAllClients,
  };
};

export default useAWSDatastore;

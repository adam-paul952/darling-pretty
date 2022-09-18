import React from "react";

import { API, graphqlOperation } from "aws-amplify";
import {
  createSessions,
  updateSessions,
  deleteSessions,
} from "../graphql/mutations";
import { getSessions } from "../graphql/queries";
import { listCompleteSessions } from "../graphql/customQueries";
import awsmobile from "../aws-exports";

import useImageStorage from "./useImageStorage";
import moment from "moment";
import useCheckout from "./useCheckout";

export interface ISessionInfo {
  id?: string;
  name: string;
  date: string;
  startTime: string | null;
  endTime: string | null;
  sessionLength: number;
  sessionInfo: string;
  price: number | undefined;
  sessionDetails: string;
  sessionImage: ImageUploadT;
  availableTimes?: string[];
  bookings?: IBookingInfo[];
  _version?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

export type ImageUploadT = {
  name: string;
  type: string;
  size: number;
  bucket?: string;
  region?: string;
  key?: string;
};

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

const useSessionInfo = () => {
  const { uploadImageToStorage } = useImageStorage();
  const { filterAvailableTimes } = useCheckout();

  const [isLoading, setLoading] = React.useState<boolean>(false);

  // construct available bookings array for session
  const getAvailableBookings = (
    startTime: string | null,
    endTime: string | null,
    length: number,
    bookings?: IBookingInfo[]
  ) => {
    let availableBookings: string[] = [];
    const start = moment(startTime, "HH:mm:ss A");
    const end = moment(endTime, "HH:mm:ss A");
    const numberOfSessions =
      moment.duration(end.diff(start)).asMinutes() / length;

    for (let i = 0; i < Math.round(numberOfSessions) + 1; i++) {
      if (i === 0) {
        availableBookings.push(start.format("hh:mm A"));
      } else {
        availableBookings.push(
          moment(availableBookings[0], "hh:mm A")
            .add(i * length, "minutes")
            .format("hh:mm A")
        );
      }
    }

    if (bookings !== undefined) {
      if (bookings.length === 0) return availableBookings;
      else {
        for (let i = 0; i < bookings.length; i++) {
          availableBookings = filterAvailableTimes(
            availableBookings,
            bookings[i].startTime
          );
          return availableBookings;
        }
      }
    }
    return availableBookings;
  };

  // create new session
  const createNewSession = async (newSession: ISessionInfo) => {
    setLoading(true);
    const { name, type } = newSession.sessionImage;
    const imageDetails = {
      name,
      mimeType: type,
      bucket: awsmobile.aws_user_files_s3_bucket,
      region: awsmobile.aws_user_files_s3_bucket_region,
      key: `public/${name}`,
    };
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
    try {
      await uploadImageToStorage(newSession.sessionImage);
      await API.graphql(
        graphqlOperation(createSessions, { input: sessionDetails })
      );
    } catch (error: any) {
      // throw new Error(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // get all available sessions from DB
  const getAllSessions = async () => {
    setLoading(true);
    try {
      const allSessions: any = await API.graphql(
        graphqlOperation(listCompleteSessions)
      );
      return allSessions.data.listSessions.items;
    } catch (error: any) {
      console.log(error);
      // throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  // get particular session by ID
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

  // update session details
  const adminUpateSession = async (session: ISessionInfo) => {
    setLoading(true);
    try {
      const updateSession: any = await API.graphql(
        graphqlOperation(updateSessions, {
          input: session,
        })
      );

      return updateSession;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  // update bookings array with client info
  const updateBookingWithClient = async (
    updatedSessionDetails: IUpdateSessionWithClientProps
  ) => {
    setLoading(true);
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
      console.log(`Updated session from useSession: `, updatedSession);
      return updatedSession;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeSession = async (id: string) => {
    try {
      await API.graphql(graphqlOperation(deleteSessions, { input: { id } }));
      console.log(`Session successfull deleted`);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    isLoading,
    createNewSession,
    getAllSessions,
    getSessionById,
    updateBookingWithClient,
    adminUpateSession,
    getAvailableBookings,
    removeSession,
  };
};

export default useSessionInfo;

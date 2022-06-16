import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSessions, updateSessions } from "../graphql/mutations";
import { getSessions } from "../graphql/queries";
import { listCompleteSessions } from "../graphql/customQueries";
import awsmobile from "../aws-exports";
import useImageStorage from "./useImageStorage";

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
  availableTimes?: string[];
  bookings?: IBookingInfo[];
  _version?: number;
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

  const [isLoading, setLoading] = React.useState<boolean>(false);

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

  const getAllSessions = async () => {
    try {
      const allSessions: any = await API.graphql(
        graphqlOperation(listCompleteSessions)
      );
      return allSessions.data.listSessions.items;
    } catch (error: any) {
      console.log(error);
      // throw new Error(error);
    }
  };

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

  const adminUpateSession = async (session: ISessionInfo) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

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

      return updatedSession;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    createNewSession,
    getAllSessions,
    getSessionById,
    updateBookingWithClient,
    adminUpateSession,
  };
};

export default useSessionInfo;

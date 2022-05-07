import { DataStore } from "@aws-amplify/datastore";
import { Bookings, Session } from "../models";
import { createSession } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const useAWSDatastore = () => {
  //Session create
  const createSession = async () => {
    try {
      const session = await DataStore.save(
        new Session({
          name: "Lorem ipsum dolor sit amet",
          booking: [],
          date: "1970-01-01Z",
          startTime: "12:30:23.999Z",
          endTime: "12:30:23.999Z",
          sessionLength: 1020,
          sessionInfo: "Lorem ipsum dolor sit amet",
          price: 1020,
          sessionDetails: "Lorem ipsum dolor sit amet",
        })
      );
      console.log(session);
      return;
      // const session = await API.graphql(graphqlOperation(createSession))
    } catch (error) {
      console.log(error);
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
    createSession,
  };
};

export default useAWSDatastore;

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Clients, Session, Bookings } = initSchema(schema);

export {
  Clients,
  Session,
  Bookings
};
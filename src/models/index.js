// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Clients, Session, Contact, Booking } = initSchema(schema);

export {
  Clients,
  Session,
  Contact,
  Booking
};
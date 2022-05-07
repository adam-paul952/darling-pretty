// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Session, Bookings } = initSchema(schema);

export {
  Session,
  Bookings
};
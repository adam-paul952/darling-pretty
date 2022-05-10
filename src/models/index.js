// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Clients, Session, Contact } = initSchema(schema);

export {
  Clients,
  Session,
  Contact
};
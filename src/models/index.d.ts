import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClientsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Clients {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly addressOne: string;
  readonly addressTwo?: string | null;
  readonly city: string;
  readonly province: string;
  readonly country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Clients, ClientsMetaData>);
  static copyOf(source: Clients, mutator: (draft: MutableModel<Clients, ClientsMetaData>) => MutableModel<Clients, ClientsMetaData> | void): Clients;
}

export declare class Session {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly sessionLength: number;
  readonly sessionInfo: string;
  readonly price: number;
  readonly sessionDetails: string;
  readonly availableTimes?: (string | null)[] | null;
  readonly bookings?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

export declare class Contact {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}
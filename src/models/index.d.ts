import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClientsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookingsMetaData = {
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
  readonly booking?: (Bookings | null)[] | null;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly sessionLength: number;
  readonly sessionInfo: string;
  readonly price: number;
  readonly sessionDetails: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

export declare class Bookings {
  readonly id: string;
  readonly title: string;
  readonly sessionID: string;
  readonly Session?: Session | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bookings, BookingsMetaData>);
  static copyOf(source: Bookings, mutator: (draft: MutableModel<Bookings, BookingsMetaData>) => MutableModel<Bookings, BookingsMetaData> | void): Bookings;
}
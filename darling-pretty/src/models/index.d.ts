import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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
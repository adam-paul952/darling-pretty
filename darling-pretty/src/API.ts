/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  id?: string | null,
  name: string,
  date: string,
  startTime: string,
  endTime: string,
  sessionLength: number,
  sessionInfo: string,
  price: number,
  sessionDetails: string,
  _version?: number | null,
};

export type ModelSessionConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  sessionLength?: ModelIntInput | null,
  sessionInfo?: ModelStringInput | null,
  price?: ModelIntInput | null,
  sessionDetails?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  name: string,
  booking?: ModelBookingsConnection | null,
  date: string,
  startTime: string,
  endTime: string,
  sessionLength: number,
  sessionInfo: string,
  price: number,
  sessionDetails: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBookingsConnection = {
  __typename: "ModelBookingsConnection",
  items:  Array<Bookings | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Bookings = {
  __typename: "Bookings",
  id: string,
  title: string,
  sessionID: string,
  Session?: Session | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSessionInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  sessionLength?: number | null,
  sessionInfo?: string | null,
  price?: number | null,
  sessionDetails?: string | null,
  _version?: number | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookingsInput = {
  id?: string | null,
  title: string,
  sessionID: string,
  _version?: number | null,
};

export type ModelBookingsConditionInput = {
  title?: ModelStringInput | null,
  sessionID?: ModelIDInput | null,
  and?: Array< ModelBookingsConditionInput | null > | null,
  or?: Array< ModelBookingsConditionInput | null > | null,
  not?: ModelBookingsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBookingsInput = {
  id: string,
  title?: string | null,
  sessionID?: string | null,
  _version?: number | null,
};

export type DeleteBookingsInput = {
  id: string,
  _version?: number | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  sessionLength?: ModelIntInput | null,
  sessionInfo?: ModelStringInput | null,
  price?: ModelIntInput | null,
  sessionDetails?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBookingsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  sessionID?: ModelIDInput | null,
  and?: Array< ModelBookingsFilterInput | null > | null,
  or?: Array< ModelBookingsFilterInput | null > | null,
  not?: ModelBookingsFilterInput | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBookingsMutationVariables = {
  input: CreateBookingsInput,
  condition?: ModelBookingsConditionInput | null,
};

export type CreateBookingsMutation = {
  createBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookingsMutationVariables = {
  input: UpdateBookingsInput,
  condition?: ModelBookingsConditionInput | null,
};

export type UpdateBookingsMutation = {
  updateBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookingsMutationVariables = {
  input: DeleteBookingsInput,
  condition?: ModelBookingsConditionInput | null,
};

export type DeleteBookingsMutation = {
  deleteBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionsQuery = {
  syncSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookingsQueryVariables = {
  id: string,
};

export type GetBookingsQuery = {
  getBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingsConnection",
    items:  Array< {
      __typename: "Bookings",
      id: string,
      title: string,
      sessionID: string,
      Session?:  {
        __typename: "Session",
        id: string,
        name: string,
        date: string,
        startTime: string,
        endTime: string,
        sessionLength: number,
        sessionInfo: string,
        price: number,
        sessionDetails: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBookingsQueryVariables = {
  filter?: ModelBookingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBookingsQuery = {
  syncBookings?:  {
    __typename: "ModelBookingsConnection",
    items:  Array< {
      __typename: "Bookings",
      id: string,
      title: string,
      sessionID: string,
      Session?:  {
        __typename: "Session",
        id: string,
        name: string,
        date: string,
        startTime: string,
        endTime: string,
        sessionLength: number,
        sessionInfo: string,
        price: number,
        sessionDetails: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    booking?:  {
      __typename: "ModelBookingsConnection",
      items:  Array< {
        __typename: "Bookings",
        id: string,
        title: string,
        sessionID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBookingsSubscription = {
  onCreateBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookingsSubscription = {
  onUpdateBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookingsSubscription = {
  onDeleteBookings?:  {
    __typename: "Bookings",
    id: string,
    title: string,
    sessionID: string,
    Session?:  {
      __typename: "Session",
      id: string,
      name: string,
      booking?:  {
        __typename: "ModelBookingsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

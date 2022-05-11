/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClientsInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  addressOne: string,
  addressTwo?: string | null,
  city: string,
  postalCode: string,
  province: string,
  country: string,
  _version?: number | null,
};

export type ModelClientsConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  addressOne?: ModelStringInput | null,
  addressTwo?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  province?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelClientsConditionInput | null > | null,
  or?: Array< ModelClientsConditionInput | null > | null,
  not?: ModelClientsConditionInput | null,
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

export type Clients = {
  __typename: "Clients",
  id: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  addressOne: string,
  addressTwo?: string | null,
  city: string,
  postalCode: string,
  province: string,
  country: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateClientsInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  addressOne?: string | null,
  addressTwo?: string | null,
  city?: string | null,
  postalCode?: string | null,
  province?: string | null,
  country?: string | null,
  _version?: number | null,
};

export type DeleteClientsInput = {
  id: string,
  _version?: number | null,
};

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
  availableTimes?: Array< string | null > | null,
  bookings?: Array< string | null > | null,
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
  availableTimes?: ModelStringInput | null,
  bookings?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
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
  date: string,
  startTime: string,
  endTime: string,
  sessionLength: number,
  sessionInfo: string,
  price: number,
  sessionDetails: string,
  availableTimes?: Array< string | null > | null,
  bookings?: Array< string | null > | null,
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
  availableTimes?: Array< string | null > | null,
  bookings?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateContactInput = {
  id?: string | null,
  name: string,
  email: string,
  subject: string,
  message: string,
  _version?: number | null,
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateContactInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  subject?: string | null,
  message?: string | null,
  _version?: number | null,
};

export type DeleteContactInput = {
  id: string,
  _version?: number | null,
};

export type ModelClientsFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  addressOne?: ModelStringInput | null,
  addressTwo?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  province?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelClientsFilterInput | null > | null,
  or?: Array< ModelClientsFilterInput | null > | null,
  not?: ModelClientsFilterInput | null,
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

export type ModelClientsConnection = {
  __typename: "ModelClientsConnection",
  items:  Array<Clients | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  availableTimes?: ModelStringInput | null,
  bookings?: ModelStringInput | null,
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

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateClientsMutationVariables = {
  input: CreateClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type CreateClientsMutation = {
  createClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClientsMutationVariables = {
  input: UpdateClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type UpdateClientsMutation = {
  updateClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClientsMutationVariables = {
  input: DeleteClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type DeleteClientsMutation = {
  deleteClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
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
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
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
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
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
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetClientsQueryVariables = {
  id: string,
};

export type GetClientsQuery = {
  getClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientsConnection",
    items:  Array< {
      __typename: "Clients",
      id: string,
      firstName: string,
      lastName: string,
      phoneNumber: string,
      email: string,
      addressOne: string,
      addressTwo?: string | null,
      city: string,
      postalCode: string,
      province: string,
      country: string,
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

export type SyncClientsQueryVariables = {
  filter?: ModelClientsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientsQuery = {
  syncClients?:  {
    __typename: "ModelClientsConnection",
    items:  Array< {
      __typename: "Clients",
      id: string,
      firstName: string,
      lastName: string,
      phoneNumber: string,
      email: string,
      addressOne: string,
      addressTwo?: string | null,
      city: string,
      postalCode: string,
      province: string,
      country: string,
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

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
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
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
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
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      availableTimes?: Array< string | null > | null,
      bookings?: Array< string | null > | null,
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
      date: string,
      startTime: string,
      endTime: string,
      sessionLength: number,
      sessionInfo: string,
      price: number,
      sessionDetails: string,
      availableTimes?: Array< string | null > | null,
      bookings?: Array< string | null > | null,
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

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      name: string,
      email: string,
      subject: string,
      message: string,
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

export type SyncContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncContactsQuery = {
  syncContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      name: string,
      email: string,
      subject: string,
      message: string,
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

export type OnCreateClientsSubscription = {
  onCreateClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClientsSubscription = {
  onUpdateClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClientsSubscription = {
  onDeleteClients?:  {
    __typename: "Clients",
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    addressOne: string,
    addressTwo?: string | null,
    city: string,
    postalCode: string,
    province: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
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
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
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
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
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
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    availableTimes?: Array< string | null > | null,
    bookings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelSessionsFilterInput = {
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
  and?: Array< ModelSessionsFilterInput | null > | null,
  or?: Array< ModelSessionsFilterInput | null > | null,
  not?: ModelSessionsFilterInput | null,
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

export type ModelSessionsConnection = {
  __typename: "ModelSessionsConnection",
  items:  Array<Sessions | null >,
  nextToken?: string | null,
};

export type Sessions = {
  __typename: "Sessions",
  id: string,
  name: string,
  date: string,
  startTime: string,
  endTime: string,
  sessionLength: number,
  sessionInfo: string,
  price: number,
  sessionDetails: string,
  sessionImage: S3ImageObject,
  availableTimes?: Array< string | null > | null,
  bookings?:  Array<Booking | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type S3ImageObject = {
  __typename: "S3ImageObject",
  name: string,
  bucket: string,
  key: string,
  region: string,
  mimeType: string,
};

export type Booking = {
  __typename: "Booking",
  clientId: string,
  clientName: string,
  startTime: string,
};

export type CreateSessionsInput = {
  id?: string | null,
  name: string,
  date: string,
  startTime: string,
  endTime: string,
  sessionLength: number,
  sessionInfo: string,
  price: number,
  sessionDetails: string,
  sessionImage: S3ImageObjectInput,
  availableTimes?: Array< string | null > | null,
  bookings?: Array< BookingInput | null > | null,
};

export type S3ImageObjectInput = {
  name: string,
  bucket: string,
  key: string,
  region: string,
  mimeType: string,
};

export type BookingInput = {
  clientId: string,
  clientName: string,
  startTime: string,
};

export type ModelSessionsConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  sessionLength?: ModelIntInput | null,
  sessionInfo?: ModelStringInput | null,
  price?: ModelIntInput | null,
  sessionDetails?: ModelStringInput | null,
  availableTimes?: ModelStringInput | null,
  and?: Array< ModelSessionsConditionInput | null > | null,
  or?: Array< ModelSessionsConditionInput | null > | null,
  not?: ModelSessionsConditionInput | null,
};

export type UpdateSessionsInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  sessionLength?: number | null,
  sessionInfo?: string | null,
  price?: number | null,
  sessionDetails?: string | null,
  sessionImage?: S3ImageObjectInput | null,
  availableTimes?: Array< string | null > | null,
  bookings?: Array< BookingInput | null > | null,
};

export type DeleteSessionsInput = {
  id: string,
};

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
  sessionBooked?: string | null,
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
  sessionBooked?: ModelStringInput | null,
  and?: Array< ModelClientsConditionInput | null > | null,
  or?: Array< ModelClientsConditionInput | null > | null,
  not?: ModelClientsConditionInput | null,
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
  sessionBooked?: string | null,
  createdAt: string,
  updatedAt: string,
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
  sessionBooked?: string | null,
};

export type DeleteClientsInput = {
  id: string,
};

export type CreateContactInput = {
  id?: string | null,
  name: string,
  email: string,
  subject: string,
  message: string,
  read: boolean,
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  read: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  subject?: string | null,
  message?: string | null,
  read?: boolean | null,
};

export type DeleteContactInput = {
  id: string,
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
  sessionBooked?: ModelStringInput | null,
  and?: Array< ModelClientsFilterInput | null > | null,
  or?: Array< ModelClientsFilterInput | null > | null,
  not?: ModelClientsFilterInput | null,
};

export type ModelClientsConnection = {
  __typename: "ModelClientsConnection",
  items:  Array<Clients | null >,
  nextToken?: string | null,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type ListCompleteSessionsQueryVariables = {
  filter?: ModelSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompleteSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionsConnection",
    items:  Array< {
      __typename: "Sessions",
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
      bookings?:  Array< {
        __typename: "Booking",
        clientId: string,
        clientName: string,
        startTime: string,
      } | null > | null,
      sessionImage:  {
        __typename: "S3ImageObject",
        name: string,
        bucket: string,
        key: string,
        region: string,
        mimeType: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateSessionsMutationVariables = {
  input: CreateSessionsInput,
  condition?: ModelSessionsConditionInput | null,
};

export type CreateSessionsMutation = {
  createSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionsMutationVariables = {
  input: UpdateSessionsInput,
  condition?: ModelSessionsConditionInput | null,
};

export type UpdateSessionsMutation = {
  updateSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionsMutationVariables = {
  input: DeleteSessionsInput,
  condition?: ModelSessionsConditionInput | null,
};

export type DeleteSessionsMutation = {
  deleteSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSessionsQueryVariables = {
  id: string,
};

export type GetSessionsQuery = {
  getSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionsConnection",
    items:  Array< {
      __typename: "Sessions",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
      sessionBooked?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
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
      read: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSessionsSubscription = {
  onCreateSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionsSubscription = {
  onUpdateSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionsSubscription = {
  onDeleteSessions?:  {
    __typename: "Sessions",
    id: string,
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    sessionLength: number,
    sessionInfo: string,
    price: number,
    sessionDetails: string,
    sessionImage:  {
      __typename: "S3ImageObject",
      name: string,
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
    },
    availableTimes?: Array< string | null > | null,
    bookings?:  Array< {
      __typename: "Booking",
      clientId: string,
      clientName: string,
      startTime: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    sessionBooked?: string | null,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
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
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClients = /* GraphQL */ `
  mutation CreateClients(
    $input: CreateClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    createClients(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      addressOne
      addressTwo
      city
      province
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClients = /* GraphQL */ `
  mutation UpdateClients(
    $input: UpdateClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    updateClients(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      addressOne
      addressTwo
      city
      province
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClients = /* GraphQL */ `
  mutation DeleteClients(
    $input: DeleteClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    deleteClients(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      addressOne
      addressTwo
      city
      province
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      name
      booking {
        items {
          id
          title
          sessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      name
      booking {
        items {
          id
          title
          sessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      name
      booking {
        items {
          id
          title
          sessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBookings = /* GraphQL */ `
  mutation CreateBookings(
    $input: CreateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    createBookings(input: $input, condition: $condition) {
      id
      title
      sessionID
      Session {
        id
        name
        booking {
          nextToken
          startedAt
        }
        date
        startTime
        endTime
        sessionLength
        sessionInfo
        price
        sessionDetails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBookings = /* GraphQL */ `
  mutation UpdateBookings(
    $input: UpdateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    updateBookings(input: $input, condition: $condition) {
      id
      title
      sessionID
      Session {
        id
        name
        booking {
          nextToken
          startedAt
        }
        date
        startTime
        endTime
        sessionLength
        sessionInfo
        price
        sessionDetails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBookings = /* GraphQL */ `
  mutation DeleteBookings(
    $input: DeleteBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    deleteBookings(input: $input, condition: $condition) {
      id
      title
      sessionID
      Session {
        id
        name
        booking {
          nextToken
          startedAt
        }
        date
        startTime
        endTime
        sessionLength
        sessionInfo
        price
        sessionDetails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

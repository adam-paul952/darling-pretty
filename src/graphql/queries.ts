/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClients = /* GraphQL */ `
  query GetClients($id: ID!) {
    getClients(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBookings = /* GraphQL */ `
  query GetBookings($id: ID!) {
    getBookings(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        sessionID
        Session {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        sessionID
        Session {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSessions = /* GraphQL */ `
  query GetSessions($id: ID!) {
    getSessions(id: $id) {
      id
      name
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      availableTimes
      bookings {
        clientId
        clientName
        startTime
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        startTime
        endTime
        sessionLength
        sessionInfo
        price
        sessionDetails
        availableTimes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      postalCode
      province
      country
      createdAt
      updatedAt
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
        postalCode
        province
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      name
      email
      subject
      message
      createdAt
      updatedAt
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
        subject
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

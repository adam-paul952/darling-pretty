/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSessions = /* GraphQL */ `
  mutation CreateSessions(
    $input: CreateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    createSessions(input: $input, condition: $condition) {
      id
      name
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      sessionImage {
        name
        bucket
        key
        region
        mimeType
      }
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
export const updateSessions = /* GraphQL */ `
  mutation UpdateSessions(
    $input: UpdateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    updateSessions(input: $input, condition: $condition) {
      id
      name
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      sessionImage {
        name
        bucket
        key
        region
        mimeType
      }
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
export const deleteSessions = /* GraphQL */ `
  mutation DeleteSessions(
    $input: DeleteSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    deleteSessions(input: $input, condition: $condition) {
      id
      name
      date
      startTime
      endTime
      sessionLength
      sessionInfo
      price
      sessionDetails
      sessionImage {
        name
        bucket
        key
        region
        mimeType
      }
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
      postalCode
      province
      country
      sessionBooked
      createdAt
      updatedAt
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
      postalCode
      province
      country
      sessionBooked
      createdAt
      updatedAt
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
      postalCode
      province
      country
      sessionBooked
      createdAt
      updatedAt
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
      subject
      message
      read
      createdAt
      updatedAt
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
      subject
      message
      read
      createdAt
      updatedAt
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
      subject
      message
      read
      createdAt
      updatedAt
    }
  }
`;

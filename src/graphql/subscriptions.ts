/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSessions = /* GraphQL */ `
  subscription OnCreateSessions {
    onCreateSessions {
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
export const onUpdateSessions = /* GraphQL */ `
  subscription OnUpdateSessions {
    onUpdateSessions {
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
export const onDeleteSessions = /* GraphQL */ `
  subscription OnDeleteSessions {
    onDeleteSessions {
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
export const onCreateClients = /* GraphQL */ `
  subscription OnCreateClients {
    onCreateClients {
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
export const onUpdateClients = /* GraphQL */ `
  subscription OnUpdateClients {
    onUpdateClients {
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
export const onDeleteClients = /* GraphQL */ `
  subscription OnDeleteClients {
    onDeleteClients {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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

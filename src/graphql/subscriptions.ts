/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
export const onCreateBookings = /* GraphQL */ `
  subscription OnCreateBookings {
    onCreateBookings {
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
export const onUpdateBookings = /* GraphQL */ `
  subscription OnUpdateBookings {
    onUpdateBookings {
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
export const onDeleteBookings = /* GraphQL */ `
  subscription OnDeleteBookings {
    onDeleteBookings {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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

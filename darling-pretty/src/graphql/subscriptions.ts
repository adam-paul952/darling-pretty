/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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

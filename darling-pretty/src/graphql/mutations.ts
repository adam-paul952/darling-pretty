/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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

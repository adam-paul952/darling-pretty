export const listSessionsWithBookings = /* GraphQL */ `
  query ListSessionsWithBookings(
    $filter: ModelSessionFilterInput
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
        bookings {
          clientId
          clientName
          startTime
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

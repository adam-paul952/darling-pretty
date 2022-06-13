export const listSessionsWithBookings = /* GraphQL */ `
  query ListSessionsWithBookings(
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
        bookings {
          clientId
          clientName
          startTime
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listSessionsWithDates = /* GraphQL */ `
  query ListSessionsWithDates(
    $filter: ModelSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
      }
      nextToken
    }
  }
`;

export const listSessionsWithBookings = /* GraphQL */ `
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

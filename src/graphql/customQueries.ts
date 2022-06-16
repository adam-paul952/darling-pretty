export const listCompleteSessions = /* GraphQL */ `
  query ListCompleteSessions(
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
        sessionImage {
          name
          bucket
          key
          region
          mimeType
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

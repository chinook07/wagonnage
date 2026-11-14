const response = await fetch("https://transit-status.fly.dev/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "fr-CA,fr;q=0.9",
  },
  body: JSON.stringify({
    operationName: "GetIncidents",
    variables: {
      offset: 0,
      limit: 100,
    },
    query: `
        query GetIncidents($offset: Int, $limit: Int) {
          incidents(offset: $offset, limit: $limit) {
            items {
              id
              type
              scope
              dateTimeRaw
              expectedRecoveryRaw
              details
              sourceUrl
              createdAt
              lastSeenAt
              resolvedAt
              ongoing
            }
            totalCount
            hasMore
          }
        }
      `,
  }),
});

console.log("HTTP status:", response.status);
console.log(JSON.stringify(await response.json(), null, 2));
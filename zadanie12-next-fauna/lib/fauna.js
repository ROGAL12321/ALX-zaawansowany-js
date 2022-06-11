import { GraphQLClient, gql } from 'graphql-request'

const CLIENT_SECRET =
  process.env.FAUNA_ADMIN_KEY || process.env.FAUNA_CLIENT_SECRET
const FAUNA_GRAPHQL_BASE_URL = 'https://graphql.fauna.com/graphql'

const graphQLClient = new GraphQLClient(FAUNA_GRAPHQL_BASE_URL, {
  headers: {
    authorization: `Bearer ${CLIENT_SECRET}`,
  },
})

export const listGuestbookEntries = () => {
  const query = gql`
    query Entries($size: Int) {
      entries(_size: $size) {
        data {
          _id
          _ts
          name
          message
          createdAt
        }
      }
    }
  `

  return graphQLClient
    .request(query, { size: 999 })
    .then(({ entries: { data } }) => data)
}


export const getGuestbookEntry = (entryId) => {
  const query = gql`
    query findGuestbookEntryByID($id: ID!) {
      findGuestbookEntryByID(id: $id) {
        _id
        _ts
        name
        message
        secretMessage
        createdAt
      }
    }
  `

  return graphQLClient
    .request(query, { id: entryId })
    .then((res) => res.findGuestbookEntryByID)
}


export const createGuestbookEntry = (newEntry) => {
  const mutation = gql`
    mutation CreateGuestbookEntry($input: GuestbookEntryInput!) {
      createGuestbookEntry(data: $input) {
        _id
        _ts
        name
        message
        createdAt
        secretMessage
      }
    }
  `

  return graphQLClient.request(mutation, { input: newEntry })
}

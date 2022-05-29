export const getRepositoriesFromSearch = query => {
  return `{
    search(query: "${query}", type: REPOSITORY, first: 30) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            owner {
              login
              avatarUrl
            }
            stargazerCount
          }
        }
      }
    }
  }`
}
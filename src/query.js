const githubQuery = (
  pageCount,
  queryString,
  paginationKeyword,
  paginationString
) => {
  return {
    query: `
          {
            viewer {
              name
            }
            search(query: "${queryString} user:SaiyedRushan sort:updated-desc", type:REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
              repositoryCount
              edges {
                cursor
                node{
                  ... on Repository {
                    name
                    description
                    id
                    url
                  }
                }
              }  
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }           
            }
          }
          `,
  };
};

export default githubQuery;

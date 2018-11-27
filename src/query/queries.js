import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 8.5) {
      id
      title
      rating
      genres
    }
  }
`;

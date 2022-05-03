import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query Comments {
    thoughts {
      _id
      recipe
      name
      timestamp
      message
      replies
    }
  }
`;

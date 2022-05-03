import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation createComment($name: String!, $message: String!) {
    createComment(name: $name, message: $message) {
      _id
      name
      message
      timestamp
      replies {
        _id
        name
        replyMessage
      }
    }
  }
`;
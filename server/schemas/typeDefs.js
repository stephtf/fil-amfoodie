const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Comments {
        _id: ID 
        name: String! 
        timestamp: String
        message: String!
        replies: [Replies]
    }

    type Replies {
        _id: ID 
        name: String! 
        timestamp: String 
        replyMessage: String 
    }

    type Query {
        comments: [Comments]
        comment(_id: ID!): Comments
    }

    type Mutation {
        createComment(name: String!, message: String!): Comments
        createReply(_id: ID!, name: String!, replyMessage: String!): Comments
        deleteComment(_id: ID!, name: String!, message: String!): Comments
        deleteReply(_id: ID!, replyId: ID!): Comments
    }
`;

module.exports = typeDefs; 

    // deleteComment(name: String!, message: String!): Comments)
        // deleteReply(name: String!, message: String!): Replies
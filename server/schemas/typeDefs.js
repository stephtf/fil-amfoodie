const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Comments {
        _id: ID 
        recipe: String!
        name: String
        timestamp: String
        message: String
        replies: [repliesSchema]
    }

    type repliesSchema {
        _id: ID 
        name: String
        timestamp: String 
        replyMessage: String 
    }

    type Query {
        comments: [Comments]
        comment(_id: ID!): Comments
    }

    type Mutation {
        createComment(name: String!, message: String!): Comments
        createReply(_id: ID!, name: String, replyMessage: String): Comments
        deleteComment(_id: ID!): Comments
        deleteReply(_id: ID!, replyId: ID!): Comments
    }
`;

module.exports = typeDefs; 


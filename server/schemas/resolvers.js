const { Comments, Replies } = require('../models');

const resolvers = {
    Query: {
        comments: async () => {
            return Comments.find({});
        }, 
        comment: async () => {
            return Comments.findOne({ _id: commentId })
        },
    },
    Mutation: {
        createComment: async (parent, { name, message }) => {
            return Comments.create({ name, message });
        },
        createReply: async (parent, { commentId, name, replyMessage }) => {
            return Comments.findOneAndUpdate(
              { _id: commentId },
              {
                $addToSet: { replies: { name, replyMessage } },
              },
              {
                new: true,
                runValidators: true,
              }
            );
        },
        deleteComment: async (parent, { commentId }) => {
            return Comments.findOneAndDelete({ _id: commentId }); 
        }, 
        deleteReply: async (parent, { commentId, replyId }) => {
            return Comments.findOneAndUpdate(
              { _id: commentId },
              { $pull: { replies: { _id: replyId } } },
              { new: true }
            );
        },
    }
};


module.exports = resolvers;


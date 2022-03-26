const { Comments } = require('../models');
const replySchema = require('../models');

const resolvers = {
    Query: {
        comments: async () => {
            return await Comments.find({});
        }, 
        comment: async (parent, { commentId }) => {
            return await Comments.findOne({ _id: commentId })
        },
    },
    Mutation: {
        createComment: async (parent, { name, message }) => {
            return await Comments.create({ name, message });
        },
        createReply: async (parent, { commentId, replies: { name, replyMessage } }) => {
            return await Comments.findOneAndUpdate(
                { _id: commentId },
                {
                    $addToSet: { replies: { name, replyMessage } },
                  },
                  {
                    new: true,
                    runValidators: true,
                  }
            )
        },
        deleteComment: async (parent, { commentId }) => {
            return await Comments.findOneAndDelete({ _id: commentId }); 
        }, 
        deleteReply: async (parent, { commentId, replyId }) => {
            return await Comments.findOneAndUpdate(
              { _id: commentId },
              { $pull: { replies: { _id: replyId } } },
              { new: true }
            );
        },
    }
};


module.exports = resolvers;


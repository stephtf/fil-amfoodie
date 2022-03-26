const { Comments } = require('../models');

const resolvers = {
    Query: {
        comments: async () => {
            return await Comments.find({});
        }, 
        comment: async (parent, { _id }) => {
            return await Comments.findOne({ _id: _id })
        },
    },
    Mutation: {
        createComment: async (parent, { name, message }) => {
            return await Comments.create({ name, message });
        },
        createReply: async (parent, { _id, name, replyMessage }) => {
            return await Comments.findOneAndUpdate(
                { _id: _id },
                {
                    $addToSet: { replies: [ { name, replyMessage } ]},
                  },
                  {
                    new: true,
                    runValidators: true,
                  }
            )
        },
        deleteComment: async (parent, { _id }) => {
            return await Comments.deleteOne({ _id: _id }); 
        }, 
        deleteReply: async (parent, { _id, replyId }) => {
            return await Comments.findOneAndUpdate(
              { _id: _id },
              { $pull: { replies: { _id: replyId } } },
              { new: true }
            );
        },
    }
};


module.exports = resolvers;


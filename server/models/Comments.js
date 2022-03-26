const { Schema, model } = require('mongoose');
const repliesSchema = require('./Replies');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    timestamp: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    message: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
    replies: [repliesSchema]
});

commentSchema 
  .virtual('commentCount')
  .get(function () {
    const numberOfReplies = this.replies.length; 
    return numberOfReplies;
  })

const Comments = model('Comments', commentSchema);

module.exports = Comments;
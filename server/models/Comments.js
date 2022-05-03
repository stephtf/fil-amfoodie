const { Schema, model } = require('mongoose');
const repliesSchema = require('./Replies');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    recipe: {
      type: String,
      required: true,
    },
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

},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

commentSchema 
  .virtual('repliesCount')
  .get(function () {
    return `${this.replies.length}`;
  })

const Comments = model('Comments', commentSchema);

module.exports = Comments;
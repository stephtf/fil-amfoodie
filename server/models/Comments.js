const { Schema, model } = require('mongoose');

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
    replies: [
      {
        name: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date, 
          default: Date.now, 
          get: (timestamp) => dateFormat(timestamp),
        },
        replyMessage: {
          type: String,
          required: true, 
          minlength: 1, 
          maxlength: 280,
        },
      }
    ]
});

const Comments = model('Comments', commentSchema);

module.exports = Comments;
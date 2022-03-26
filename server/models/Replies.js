const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const repliesSchema = new Schema(
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
)

module.exports = repliesSchema;
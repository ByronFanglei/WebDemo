const mongoose = require('mongoose')
const Schema = mongoose.Schema
const topicSchema = new Schema({
  typename: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Topic', topicSchema)

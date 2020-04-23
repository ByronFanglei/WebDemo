//连接数据库
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false)
var stuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1]
  },
  time: {
    type: String,
    default: Date.now()
  }
})

module.exports =  mongoose.model('Student', stuSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: String,
  description: String,
  completed: Boolean
});

mongoose.model('todo', todoSchema);

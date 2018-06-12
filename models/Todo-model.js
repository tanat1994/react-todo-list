var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  Todo: {
    todo: String,
    description: String,
    completed: false
  }
});

module.exports = {
  Todo: Todo
};

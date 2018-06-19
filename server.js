const express = require('express');
const path = require('path');
const app = express();
const Todo = require('./models/dummyTodo'); //dummy
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config/config');
const bodyParser = require('body-parser');

const modelTodo = require('./models/Todo.js');
mongoose.connect(config.mongoURI);
const Todos = mongoose.model('todo');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

// @dev render Inder.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// @dev fetch Todo
app.get('/api/todo-list', (req, res) => {
  // res.json(Todo);
  Todos.find().then((todo) => {
    res.json(todo);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

// @dev Add new Todo
app.post('/api/add-todo-list', (req, res) => {
  var todo = new Todos ({
    todo: req.body.todo,
    description: req.body.description,
    completed: req.body.completed
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

// @dev Put/Path Todo by Id
app.patch('/api/patch-todo/:id', (req, res) => {
  var id = req.params.id;
  // var todoTitle = req.body.todo;
  // var todoDesc = req.body.description;
  var { todo, description } = req.body;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // $set: {
  // todo: todo,
  // description: description
  // }
  Todos.findByIdAndUpdate(id, {
    $set: req.body
  }).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

// @dev Delete Todo by Id
app.delete('/api/delete-todo/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todos.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.status(200).send(todo);
  }, (err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`> Ready on port ${port}`);
});

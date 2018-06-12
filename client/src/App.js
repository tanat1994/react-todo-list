import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list';
import LikeButton from './components/state-test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <LikeButton />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

class DeleteTodo extends Component {

  constructor (props) {
    super(props);
    this.state = {
      _id: this.props.todoId
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo () {
    console.log(this.state._id);
    axios.delete(`/api/delete-todo/${this.state._id}`, {
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });
  }

  render () {
    return (
      <a className="delete is-small"
        onClick={this.deleteTodo}>
      </a>
    );
  }
}
export default DeleteTodo;

import React, { Component } from 'react';
import DeleteTodo from './delete-todo';

class TableTodo extends Component {

  constructor (props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount () {
    fetch('/api/todo-list')
      .then(res => res.json())
      .then(todos => this.setState({ todos }, () => console.log('Todos fetched ....', todos)));
  }

  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map((todo) =>
              (
                todo.completed === true
                ?(<tr key={ todo.todo }>
                    <td>
                      <span className="tag is-success">{ todo.todo } - { todo.description  }
                        <DeleteTodo />
                      </span>
                    </td>
                  </tr>)
                :(<tr key={ todo.todo }>
                    <td>
                      <span className="tag is-info">{ todo.todo } - { todo.description }
                        <DeleteTodo todoId={ todo._id }/>
                      </span>
                    </td>
                  </tr>)
              )
          )}
        </tbody>
      </table>
    );
  }
}

export default TableTodo;

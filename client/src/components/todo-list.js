import React, { Component } from 'react';
import TableTodo from './table-todo';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

class Todo extends Component {

  constructor (props) {
    super(props);
    this.state = {
      newTodo: '',
      todoDesc: '',
      loading: 'button is-info is-success'
    };
    //this.onInputChange = this.onInputChange.bind(this);
    this.onAddList = this.onAddList.bind(this);
  }

  // onInputChange (event) {
  //   this.setState({ newTodo: event.target.value });
  // }

  onAddList (event) {
    event.preventDefault();
    const { newTodo, todoDesc } = this.state;
    this.setState({ loading: 'button is-info is-success is-loading' });

    setTimeout(() => {
      axios.post('/api/add-todo-list', {
        todo: newTodo,
        description: todoDesc,
        completed: false
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
      this.setState({ newTodo: '', todoDesc: '', loading: 'button is-info is-success' });
    }, 3000);
  }

  render () {
    return (
      <div className="field"> 
        <section className="hero is-medium is-warning">
          <div className="container">
            <nav className="navbar is-warning">

              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width="112" height="28" />
              </a>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="button is-info">
                        <span className="icon"><i className="fa fa-twitter"></i></span>
                        <span>Twitter</span>
                      </a>
                    </p>

                    <p className="control">
                      <a className="button is-primary">
                        <span className="icon"><i className="fa fa-download"></i></span>
                        <span>Download</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </nav>
          </div>

          <div className="hero-body">
            <div className="container">
              <h1 className="title">Todo List /></h1>
              <h2 className="subtitle">Todolist Application</h2>

              {/*<div className="field has-addons">
                <div className="control">
                  <input className="input" type="text"
                    placeholder="Todo List"
                    value={this.state.newTodo}
                    onChange= { event => this.setState({ newTodo: event.target.value })}/>
                </div>

                <div className="control">
                  <a className={this.state.loading}
                    onClick={this.onAddList}>
                    Add to list
                  </a>
                </div>
              </div>
              */}

              <div className="field">
                <input className="input" type="text"
                  placeholder="Todo Title"
                  value={this.state.newTodo}
                  onChange={ event => this.setState({ newTodo: event.target.value })}/>
              </div>
              <div className="field">
                <input className="input" type="text"
                  placeholder="Todo Description"
                  value={this.state.todoDesc}
                  onChange={ event => this.setState({ todoDesc: event.target.value })}/>
              </div>

              <nav className="level">
                <div className="level-left">
                  &nbsp;
                </div>
                <div className="level-right">
                  <a className={this.state.loading}
                    onClick={this.onAddList}>
                    Add New Todo
                  </a>
                </div>
              </nav>
            </div>
          </div>

        </section>

        <div className="container">
          <TableTodo />
        </div>
      </div>
    );
  }
}

export default Todo;

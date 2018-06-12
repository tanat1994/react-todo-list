import React, { Component } from 'react';

class Customers extends Component {
  constructor () {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount () {
    fetch('/api/todo-list')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched ....', customers)));
  }

  render () {
    return (
      <div>
        <h1>Hello world from customers</h1>
        <ul>
          {this.state.customers.map(customer =>
            <li key={ customer.id }>{ customer.text }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;

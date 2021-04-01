import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateTransaction from './CreateTransaction';

export default class BankAccount extends Component {
  state = {
    transactions: [],
  };

  getTransactions = () => {
    axios
      .get('/api/transactions')
      .then((response) => {
        console.log('response.data', response.data);
        this.setState({
          transactions: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    return (
      <>
        <Link to="/transaction/create">Add Transaction</Link>
        <div>{this.state.transactions.map(transaction => {
          return (
            <div key={transaction._id}>{transaction.amount}</div>
          )
        })}</div>
      </>
    );
  }
}

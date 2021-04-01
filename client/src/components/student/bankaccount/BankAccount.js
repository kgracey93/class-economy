import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateTransaction from './CreateTransaction';
import TransactionTable from './TransactionTable';

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
        <br/>
        <br/>
        <br/>
        <table>
          <tr>
            <th>Amount</th>
            <th>Deposit/Withdraw</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          {/* <tr> */}
          {this.state.transactions.map((transaction) => {
            return <TransactionTable transaction={transaction} />;
          })}
          {/* </tr> */}
        </table>
        <div>
          {/* {this.state.transactions.map((transaction) => {
            return <TransactionTable transaction={transaction} />;
          })} */}
        </div>
      </>
    );
  }
  ß;
}

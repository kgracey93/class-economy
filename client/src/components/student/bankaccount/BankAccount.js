import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateTransaction from './CreateTransaction';
import TransactionTable from './TransactionTable';
import './BankAccount.css';

export default class BankAccount extends Component {
  state = {
    transactions: [],
  };

  getTransactions = () => {
    axios
      .get('/api/transactions')
      .then((response) => {
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
        <div className="bank-account">
          <Link to="/transaction/create">Add Transaction</Link>
          <br />
          <br />
          <br />
          <table>
          <tbody>
            <tr>
              <th>Amount</th>
              <th>Deposit/Withdraw</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
            {/* <tr> */}
            {this.state.transactions.map((transaction) => {
              return (
                <TransactionTable
                  transaction={transaction}
                  key={transaction._id}
                />
              );
            })}
            {/* </tr> */}
            </tbody>
          </table>
          <div>
            {/* {this.state.transactions.map((transaction) => {
            return <TransactionTable transaction={transaction} />;
          })} */}
          </div>
        </div>
      </>
    );
  }
  ß;
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CreateTransaction from './CreateTransaction';

export default class BankAccount extends Component {
  render() {
    return (
      <>
      <Link to="/transaction/create">Add Transaction</Link>
      <div>
        This is where the bank account will be
      </div>
      </>
    )
  }
}

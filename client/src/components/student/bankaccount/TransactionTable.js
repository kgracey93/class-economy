// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import React, { Component } from 'react'

export default class TransactionTable extends Component {
  render() {
    return (
      <tr key={this.props.transaction._id}>
        <td>{this.props.transaction.amount}</td>
        <td>{this.props.transaction.operation}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.description}</td>
        </tr>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTransaction extends Component {
  state = {
    description: '',
    amount: '',
    category: 'rent',
    newBalance: '',
    user: this.props.user,
    transactionID: '',
    operation: 'deposit',
  };

  resetState = () => {
    this.setState({
      // description: '',
      amount: '',
      reason: '',
      user: this.props.user,
      transactionID: '',
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault()
    let id = this.state.user._id;
    
    try {
      const newTransaction = await axios.post('/api/transactions', {
        // description: this.state.description,
        amount: this.state.amount,
        category: this.state.category,
        operation: this.state.operation,
        description: this.state.description
      });
      let user = this.props.user;
      console.log('user', user)
      user.transactions.unshift({
        _id: newTransaction.data._id,
      });
      this.setState({
        user: this.props.user,
      });

      const updatedUser = await axios.put(`/api/users/${id}`, {
        transactions: this.state.user.transactions,
      });
      this.props.history.push('/bank-account');

  } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Create a Transaction</h1>
            <div>
              <div className="create-transaction-form-item">
                <label>Date: </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={this.state.date}
                  onChange={this.handleChange}
                  // required
                />
              </div>

              <div className="create-transaction-form-item">
                <label>Type: </label>
                {/* <p>this will be generated with more specifics one it actually comes from the teacher's side</p> */}
                <select
                  id="operation"
                  name="operation"
                  value={this.state.operation}
                  onChange={this.handleChange}
                >
                  <option value="deposit">Deposit</option>
                  <option value="withdraw">Withdraw</option>
                </select>
              </div>

              <div className="create-transaction-form-item">
                <label>Amount: </label>
                <input
                  type="amount"
                  id="amount"
                  name="amount"
                  // value={this.state.amount}
                  onChange={this.handleChange}
                  // required
                />
              </div>

              <div className="create-transaction-form-item">
                <label>Category:</label>
                {/* <p>this will be generated with more specifics one it actually comes from the teacher's side</p> */}
                <select
                  id="category"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value="rent">Rent</option>
                  <option value="paycheck">Paycheck</option>
                  <option value="fine">Fine</option>
                  <option value="bonus">Bonus</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="create-transaction-form-item">
                <label>Description: </label>
                <br />
                <input
                  type="description"
                  id="description"
                  name="description"
                  // value={this.state.newBalance}
                  onChange={this.handleChange}
                  // required
                />
              </div>

              <div className="create-transaction-form-item">
                <label>New Balance: </label>
                <br />
                <input
                  type="newBalance"
                  id="newBalance"
                  name="newBalance"
                  // value={this.state.newBalance}
                  onChange={this.handleChange}
                  // required
                />
              </div>

              <div className="create-transaction-form-item">
                <label>How much do you want to put towards savings?</label>
                <br />
                <input
                  type="savings"
                  id="savings"
                  name="savings"
                  // value={this.state.newBalance}
                  onChange={this.handleChange}
                  // required
                />
              </div>

            </div>

            <div className="create-transaction-buttons">
              {/* <button type ="submit" className="button-light" form="create-transaction-form" onClick={() => this.state.button = 'cancel'}>
                Cancel
              </button> */}
              <button
                type="submit"
                // className="button-light"
                // form="create-transaction-form"
                // onClick={}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

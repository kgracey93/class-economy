import React, { Component } from 'react';
import axios from 'axios';


export default class CreateTransaction extends Component {
  state = {
    category: '',
    dailyTargetDescription: '',
    category: 'health',
    user: this.props.user,
    transactionID: '',
    button: '',
  };

  resetState = () => {
    this.setState({
      title: '',
      goal: '',
      dailyTargetDescription: '',
      category: '',
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

  // handleSubmit = async (event) => {
  //   console.log(this.state.button);
  //   event.preventDefault()
  //   let id = this.state.user._id;
  //   try {
  //     if(this.state.button  === 'later') {
  //     const newTransaction = await axios.post('/api/transactions', {
  //       title: this.state.title,
  //       goal: this.state.goal,
  //       dailyTarget: {
  //         description: this.state.dailyTargetDescription,
  //       },
  //       category: this.state.category,
  //     });
  //     let user = this.props.user;
  //     user.transactions.unshift({
  //       id: newTransaction.data._id,
  //       status: 'favorite',
  //       tracker: [],
  //     });
  //     this.setState({
  //       user: this.props.user,
  //     });

  //     const updatedUser = await axios.put(`/api/users/${id}`, {
  //       transactions: this.state.user.transactions,
  //       rewards: this.state.user.rewards,
  //     });
  //     this.props.history.push('/transactions');
  //   } 
    
  //   else if (this.state.button === 'start') {
  //     const newTransaction = await axios.post('/api/transactions', {
  //       title: this.state.title,
  //       goal: this.state.goal,
  //       dailyTarget: {
  //         description: this.state.dailyTargetDescription,
  //       },
  //       category: this.state.category,
  //     });
  //     let user = this.props.user;
  //     user.transactions.unshift({
  //       id: newTransaction.data._id,
  //       status: 'active',
  //       tracker: [],
  //     });
  //     this.setState({
  //       user: this.props.user,
  //     });
  //     const updatedUser = await axios.put(`/api/users/${id}`, {
  //       transactions: this.state.user.transactions,
  //       rewards: this.state.user.rewards,
  //     });
  //     await console.log('state after creating new transaction', this.state);
  //     this.props.history.push(`/transactions/${newTransaction.data._id}/start`);
  //   }

  // } catch (error) {
  //     console.log(error);
  //   }
  // };


  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  render() {
    return (
      <>
        <div>
          <form
            onSubmit={this.handleSubmit}
          >
            <h1>Create a Transaction</h1>
            <div>
              <div className="create-transaction-form-item">
                <label htmlFor="title">Date: </label>
                <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={this.state.date}
                  // onChange={this.handleChange}
                  // required
                />
              </div>

              <div className="create-transaction-form-item">
                <label htmlFor="type">Transaction Type:</label>
                <br />
                <select 
                  id="category"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option>Rent</option>
                  <option>Paycheck</option>
                  <option>Fine</option>
                  <option>Bonus</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="create-transaction-form-item">
                <label htmlFor="dailyTargetDescription">Daily Action:</label>
                <br />
                <input
                  type="text"
                  id="dailyTargetDescription"
                  name="dailyTargetDescription"
                  value={this.state.dailyTargetDescription}
                  onChange={this.handleChange}
                  placeholder="Example Action: Get 8 hours of sleep each night"
                />
              </div>

              <div className="create-transaction-form-item">
                <label htmlFor="category">Category &nbsp; &nbsp;</label>
                {/* <br /> */}
                <select
                  name="category"
                  id="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value="health">Health</option>
                  <option value="fitness">Fitness</option>
                  <option value="career">Career</option>
                  <option value="productivity">Productivity</option>
                  <option value="finance">Finance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="create-transaction-buttons">
              {/* <button type ="submit" className="button-light" form="create-transaction-form" onClick={() => this.state.button = 'cancel'}>
                Cancel
              </button> */}
              <button
                type="submit"
                className="button-light"
                form="create-transaction-form"
                value="later"
                onClick={() => this.state.button = 'later'}
              >
                Save for later
              </button>
              <button
                type="submit"
                className="button-dark"
                form="create-transaction-form"
                value="start"
                onClick={() => this.state.button = 'start'}
              >
                Start now!
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

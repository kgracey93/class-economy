import React, { Component } from 'react';
import { signup } from '../../services/auth';
// import './Auth.css';

export default class SignUp extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, firstName, lastName, email, role } = this.state;
    console.log('role', role, 'username', username);
    signup(username, password, firstName, lastName, email, role).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '', 
        });
      } else {
        // console.log(this.props);
        this.props.setUser(data);
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <>
      {this.state.role ? (
        <div className="auth-container">
        <div className="left">
          <div className="header">
            <h2>Welcome</h2>
            <h4>Sign up to get that Coinnn</h4>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-field-box">
                {/* <label htmlFor="username">Username: </label> */}
                <input
                  className="form-field"
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </div>

              <div className="form-field-box">
                {/* <label htmlFor="password">Password: </label> */}
                <input
                  className="form-field"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </div>

              {this.state.message && <p>{this.state.message}</p>}

              <div className="form-field-box">
                {/* <label htmlFor="firstName">Name: </label> */}
                <input
                  className="form-field"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="form-field-box">
                {/* <label htmlFor="lastName">Last Name: </label> */}
                <input
                  className="form-field"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div className="form-field-box">
                {/* <label htmlFor="email">Email: </label> */}
                <input
                  className="form-field"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </div>
              <br />
              <button type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
      ) : (
        <div>
          <h1>Sign up with Classroom Economy as</h1>
          <button name="role" onClick={this.handleChange} value="student">Student</button>
          <button name="role" onClick={this.handleChange} value="teacher">Teacher</button>
          <button name="role" onClick={this.handleChange} value="school-leader">School Leader</button>
        </div>
      )}
      </>
      
    );
  }
}

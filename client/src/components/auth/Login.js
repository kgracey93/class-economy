import React, { Component } from 'react';
import { login } from '../../services/auth';
import './Auth.css';

export default class SignUp extends Component {
  state = {
    username: '',
    password: '',
    role: '',
  };

  handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target.name);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: '',
        });
      } else {
        //put the user in the state of App.js
        this.props.setUser(data);
        this.props.history.push('/');
      }
    });
  };

  cancel = (event) => {
    this.setState({
      role: '',
    });
    this.props.history.push('/');
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.role ? (
          <div className="auth-container">
            <div className="left">
              <div className="header">
                <h2 className="animation a1">Welcome Back</h2>
                <h4 className="animation a2">
                  {this.state.role.charAt(0).toUpperCase() +
                    this.state.role.slice(1)}{' '}
                  login
                </h4>
              </div>
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-field-box">
                    {/* <label htmlFor="username">Username: </label> */}
                    <input
                      className="form-field animation a3"
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-field-box">
                    {/* <label htmlFor="password">Password: </label> */}
                    <input
                      className="form-field animation a4"
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  {this.state.message && <p>{this.state.message}</p>}
                  <br />
                  <div className="buttons">
                    <button className="button-dark animation a6" type="submit">
                      Log In
                    </button>
                    <button onClick={this.cancel}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right"></div>
          </div>
        ) : (
          <div className="login">
            <h1>Login with Classroom Economy as</h1>
            <div className="role-buttons">
              <button
                className="role"
                name="role"
                value="student"
                onClick={this.handleChange}
              >
                <img src="../../images/backpack.png" alt="backpack" />
                <h1>Student</h1>
              </button>
              <button
                className="role"
                name="role"
                value="teacher"
                onClick={this.handleChange}
              >
                <img src="../../images/apple.png" alt="backpack" />
                <h1>Teacher</h1>
              </button>
              <button
                className="role"
                name="role"
                value="school Leader"
                onClick={this.handleChange}
              >
                <img src="../../images/clipboard.png" alt="backpack" />
                <h1>School Leader</h1>
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

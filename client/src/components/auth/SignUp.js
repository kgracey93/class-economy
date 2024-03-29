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
    // console.log(event.target.name);
  };

  selectUserType = (event) => {
    const { name } = event.target;
    this.setState({ role: name });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, firstName, lastName, email, role } = this.state;
    console.log('role', role, 'username', username);
    signup(username, password, firstName, lastName, email, role).then(
      (data) => {
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
      }
    );
  };

  cancel = (event) => {
    this.setState({
      role: '',
    });
    this.props.history.push('/');
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
                <h4>
                  {this.state.role.charAt(0).toUpperCase() +
                    this.state.role.slice(1)}{' '}
                  signup
                </h4>
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
                      required
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
                      required
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
                  <div className="buttons">
                    <button type="submit">Sign Up</button>
                    <button onClick={this.cancel}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right"></div>
          </div>
        ) : (
          <div className="signup">
            <h1>Signup with Classroom Economy as</h1>
            <div className="role-buttons">
              <div className="role">
                <img
                  src="../../images/backpack.png"
                  alt="backpack"
                  name="student"
                />
                <button onClick={this.selectUserType} name="student">
                  Student
                </button>
              </div>
              <div className="role">
                <div>
                  <img
                    src="../../images/apple.png"
                    alt="backpack"
                    name="teacher"
                  />
                  <button onClick={this.selectUserType} name="teacher">
                    Teacher
                  </button>
                </div>
              </div>
              <div
                className="role school-leader"
              >
                <img
                  src="../../images/clipboard.png"
                  alt="backpack"
                  name="school Leader"
                />
                <button onClick={this.selectUserType} name="school Leader">
                  School Leader
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

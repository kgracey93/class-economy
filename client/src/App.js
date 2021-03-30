import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import JobBoard from './components/student/jobboard/JobBoard';
import CreateTransaction from './components/student/bankaccount/CreateTransaction';
import BankAccount from './components/student/bankaccount/BankAccount';

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp setUser={this.setUser} {...props} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => <Login setUser={this.setUser} {...props} />}
          />

          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                setUser={this.setUser}
                {...props}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/job-board"
            render={(props) => (
              <JobBoard
                setUser={this.setUser}
                {...props}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/transaction/create"
            render={(props) => (
              <CreateTransaction
                setUser={this.setUser}
                {...props}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/bank-account"
            render={(props) => (
              <BankAccount
                setUser={this.setUser}
                {...props}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={(props) => (
              <Dashboard
                setUser={this.setUser}
                user={this.state.user}
                {...props}
              />
            )}
          />
        </Switch>
        {/* {this.state.user ? (
          <h1>Super Great Job {this.state.user.username} <br></br>You're Logged in</h1>
        ) : (
          <div>
            <h1>
              WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!
            </h1>
            <p>signup or login to continue </p>
          </div>
        )}

        <img src={katieAbby} alt="not working" /> */}
      </div>
    );
  }
}

export default App;

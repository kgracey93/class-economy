import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import katieAbby from './components/KatieAbby.png'

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
      <BrowserRouter>
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

            {/* <Route
            exact
            path='/profile'
            render={props => <Profile setUser={this.setUser} {...props} user={this.state.user} />}
          /> */}
          </Switch>
        </BrowserRouter>
        <h1>WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!</h1>
      <img src={katieAbby} alt="not working"/>
      </div>
    );
  }
}

export default App;

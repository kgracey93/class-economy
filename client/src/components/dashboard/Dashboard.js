import React, { Component } from 'react';
// import './Dashboard.css';
// import katieAbby from '../../images/KatieAbby.png';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        {this.props.user ? (
          <h1>
            Super Great Job {this.props.user.username} <br></br>You're Logged in
          </h1>
        ) : (
          <div>
            <h1>
              WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!
            </h1>
            <p>signup or login to continue </p>
          </div>
        )}

        <img src='../../images/KatieAbby.png'alt="not working" />
      </>
    );
  }
}

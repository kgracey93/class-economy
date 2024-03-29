import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import './NavBar.css'

export default function Navbar(props) {
  const handleLogout = (props) => {
    console.log('logout');
    logout().then(() => {
      props.setUser(null);
    });
    console.log('logout successful');
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <Link className="link" to="/">
      <img src='../../images/logo.png'alt="logo" className="logo"/>
        </Link>
      </div>
      {props.user ? (
        <div className="links">
          <Link className="link" to="/bank-account">
            Bank Account
          </Link>
          <Link className="link" to="/job-board">
            Job Board
          </Link>
          <Link className="link" to="/profile">
            Profile
          </Link>
          <Link
            className="link"
            to="/login"
            onClick={() => handleLogout(props)}
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div className="links">
          <Link className="link">Learn More</Link>
          <Link className="link">Schools</Link>
          <Link className="link">Resources</Link>
          <Link className="link loginlink" to="/login">
            Log In
          </Link>
          <Link className="link signuplink" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

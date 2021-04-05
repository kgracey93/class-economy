import React, { Component } from 'react';
import CreateJob from './CreateJob';
import { Link } from 'react-router-dom';

export default class JobBoard extends Component {
  render() {
    return (
      <div>
      <Link to="/jobs/create">Add Job</Link>
      <br/>
        This is where the job board will be 
      </div>
    )
  }
}

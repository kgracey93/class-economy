import React, { Component } from 'react';
import OneJob from './OneJob';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class JobBoard extends Component {

  state = {
    jobs: [],
  };

  getJobs = () => {
    axios
      .get('/api/jobs')
      .then((response) => {
        this.setState({
          jobs: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getJobs();
  }

  render() {
    // console.log('state', this.state);
    return (
      <div>
      <Link to="/jobs/create">Add Job</Link>
      <br/>
      {this.state.jobs.map((job) => {
              return (
                <OneJob
                  job={job}
                  key={job._id}
                />
              );
            })}
      </div>
    )
  }
}

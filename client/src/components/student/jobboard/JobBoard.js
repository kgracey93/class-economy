import React, { Component } from 'react';
import OneJob from './OneJob';
import JobList from './JobList'
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './JobBoard.css'

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
      <>
      <div className="job-board">
      <Link to="/jobs/create">Add Job</Link>
      <br/>
      {/* <div>
        {this.state.jobs.map((job) => {
              return (
                <OneJob
                  job={job}
                  key={job._id}
                />
              );
            })}
      </div> */}
      <div>
        <JobList
          jobs={this.state.jobs}
        />
      </div>
      {/* <Switch>
          
          <Route
            exact
            path="/jobs/:id"
            jobs={this.state.jobs}
          >
            <OneJob/>
          </Route>

          </Switch> */}
      </div>
      </>
    )
  }
}

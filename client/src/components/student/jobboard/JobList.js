import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OneJob from './OneJob';

export default class JobList extends Component {
  state = {
    selectedJob: '',
  };

  selectJob = async (event) => {
    try {
      console.log(event.target);
      event.preventDefault();
      const jobId = event.target.id;
      console.log(jobId);
      axios.get(`/api/jobs/${jobId}`).then((res) => {
        const selectedJob = res.data;
        this.setState({ selectedJob });
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  applyToJob = async (event) => {
    try {
      alert('Nice click! This button does nothing 😈😜');
    } catch (error) {
      console.log('error:', error);
    }
  };

  // componentDidMount = () => {
  //   this.getJobs();
  //   // this.setState({
  //   //   user: this.props.user,
  //   // });
  // };

  render() {
    return (
      <div className="job-list-info">
        <div
          style={{ maxHeight: '70vh', overflowY: 'scroll' }}
          className="job-list"
        >
          {this.props.jobs.map((job) => {
            return (
              <div
                key={job._id}
                id={job._id}
                className="job-preview"
                onClick={this.selectJob}
              >
                <h3 id={job._id}>{job.title}</h3>
                <p id={job._id}>{job.salary}/week</p>
              </div>
            );
          })}
        </div>
        <div className="job-info">
          {this.state.selectedJob ? (
            <div>
              <div className="job-title-and-button">
                <div>
                  <h1>{this.state.selectedJob.title}</h1>
                  <p>{this.state.selectedJob.salary} /week</p>
                </div>
                <button onClick={this.applyToJob}>Apply Now</button>
              </div>
              <p className="vacancies">2 positions available</p>
              <h3>Responsibilities</h3>
              <p>{this.state.selectedJob.description}</p>
              <h3>Qualifications</h3>
              <p>{this.state.selectedJob.qualifications}</p>
            </div>
          ) : (
            <div className="no-job-selected">
              <h1>
                Select a job from the left to apply and start making those Bux!
              </h1>
              <img src="../../images/moneygif.gif" alt="money gif" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

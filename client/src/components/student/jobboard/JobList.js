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
      event.preventDefault();
      console.log('event.target', event.target);
      const jobId = event.target.id;
      console.log('jobId', jobId);
      axios.get(`/api/jobs/${jobId}`).then((res) => {
        const selectedJob = res.data;
        console.log('selectedJob', selectedJob);
        this.setState({ selectedJob });
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  // componentDidMount = () => {
  //   this.getJobs();
  //   // this.setState({
  //   //   user: this.props.user,
  //   // });
  // };

  render() {
    console.log('this.props.selectedJob', this.props.selectedJob);
    return (
      <div>
        <div
          // className="col-5"
          style={{ maxHeight: '20vh', overflow: 'scroll' }}
        >
          <div id="id">
            {this.props.jobs.map((job) => {
              return (
                <div key={job._id} id={job._id} className="job-preview" onClick={this.selectJob}>
                  <h3 id={job._id}>{job.title}</h3>
                  {job.salary}/week
                </div>
              );
            })}
          </div>
        </div>
        {this.state.selectedJob && (
          <div>
            <p>{this.state.selectedJob.title}</p>
            <p>{this.state.selectedJob.description}</p>
            <p>{this.state.selectedJob.salary}</p>
            <p>{this.state.selectedJob.qualifications}</p>
          </div>
        )}
      </div>
    );
  }
}

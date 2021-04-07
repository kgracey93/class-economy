import React, { Component } from 'react';
import JobList from './JobList'
import './JobBoard.css';
import axios from 'axios';

export default class OneJob extends Component {
  state = {
    selectedJob: '',
  };

  getJob() {
    const jobId = this.props.match.params.id;
    axios
      .get(`/api/jobs/${jobId}`)
      .then((res) => {
        const selectedJob = res.data;
        this.setState({ selectedJob });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  componentDidMount = () => {
    this.getJob();
    // this.setState({
    //   user: this.props.user,
    // });
  };

  render() {
    console.log('props', this.props);
    // const jobId = this.props.match.params.id
    // const job = this.props.jobs.find((job) => job._id === jobId);

    return (
      <>
        <JobList />
        <div className="job-card">
          <p>
            <b>Job Title:</b> {this.state.selectedJob.title}
          </p>
          <p>
            <b>Salary: </b> {this.state.selectedJob.salary}
          </p>
          <p>
            <b>Description: </b> {this.state.selectedJob.description}
          </p>
          <p>
            <b>Qualifications: </b> {this.state.selectedJob.qualifications}
          </p>
        </div>
      </>
    );
  }
}

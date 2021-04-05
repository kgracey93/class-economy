import React, { Component } from 'react'

export default class OneJob extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <p><b>Job Title:</b> {this.props.job.title}</p>
        <p><b>Salary: </b> {this.props.job.salary}</p>
        <p><b>Description: </b> {this.props.job.description}</p>
        <p><b>Qualifications: </b> {this.props.job.qualifications}</p>
      </div>
    )
  }
}

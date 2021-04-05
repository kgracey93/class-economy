import React, { Component } from 'react';
import axios from 'axios';

export default class CreateJob extends Component {
  state = {  
    user: this.props.user,
    title: '',
    salary: '',
    description: '',
    qualifications: '',
  };

  resetState = () => {
    this.setState({
      user: this.props.user,
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault()
    let id = this.state.user._id;
    
    try {
      const newJob = await axios.post('/api/jobs', {
      tite: this.state.title,
      salary: this.state.salary,
      description: this.state.description,
      qualifications: this.state.qualifications,
      });

      this.props.history.push('/job-board');

  } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  render() {
    return (
      <>
        <div className="job-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Create a Job</h1>
            <div>
              <div className="create-job-form-item">
                <label>Job Title:</label>
                <input
                  type="title"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="create-transaction-form-item">
                <label>Salary: </label>
                <input
                  id="salary"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.handleChange}
                >
                </input>
              </div>

              <div className="create-transaction-form-item">
                <label>Description: </label>
                <textarea
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                >
                </textarea>
              </div>

              <div className="create-transaction-form-item">
                <label>Qualifications: </label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  value={this.state.qualifications}
                  onChange={this.handleChange}
                >
                </textarea>
              </div>

            </div>

            <div className="create-transaction-buttons">
              {/* <button type ="submit" className="button-light" form="create-transaction-form" onClick={() => this.state.button = 'cancel'}>
                Cancel
              </button> */}
              <button
                type="submit"
                // className="button-light"
                // form="create-transaction-form"
                // onClick={}
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

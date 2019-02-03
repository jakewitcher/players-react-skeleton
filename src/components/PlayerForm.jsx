import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const url = 'https://players-api.developer.alchemy.codes/api/players';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: 1000,
      handedness: 'Left',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      rating: this.state.rating,
      handedness: this.state.handedness,
    });
    const token = sessionStorage.getItem('token');
    axios({
      method: 'post',
      url,
      data,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    })
      .then(() => {
        this.setState({
          firstName: '',
          lastName: '',
          handedness: 'Left',
        });
        this.props.navigate('../../roster');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Register form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First Name
            <input type="text" id="firstName" name="firstName" onChange={this.handleInput} placeholder="first name" />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input type="text" id="lastName" name="lastName" onChange={this.handleInput} placeholder="last name" />
          </label>
          <label htmlFor="rating">
            Rating
            <input type="number" id="rating" name="rating" onChange={this.handleInput} placeholder="rating" />
          </label>
          <label htmlFor="handedness">
            Handedness
            <select id="handedness" name="handedness" onChange={this.handleInput}>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
            </select>
          </label>
          <input type="submit" id="create" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PlayerForm;

PlayerForm.propTypes = {
  navigate: PropTypes.func,
};

PlayerForm.defaultProps = {
  navigate: () => {},
};

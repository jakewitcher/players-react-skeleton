import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import url from '../utils/const';
import { formatName } from '../utils/helpers';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: null,
      handedness: 'Left',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    if (name === 'rating') {
      if (!value || value.match(/^[0-9]\d*$/)) {
        this.setState({
          [name]: value,
        });
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      const data = JSON.stringify({
        first_name: formatName(this.state.firstName),
        last_name: formatName(this.state.lastName),
        rating: parseInt(this.state.rating, 10),
        handedness: this.state.handedness,
      });
      const token = sessionStorage.getItem('token');
      axios({
        method: 'post',
        url: `${url}/players`,
        data,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
        .then(() => {
          this.setState({
            firstName: '',
            lastName: '',
            handedness: 'Left',
            error: '',
          });
          this.props.navigate('../../roster');
        })
        .catch(error => {
          if (error) {
            this.setState({
              error: 'We\'re having trouble creating a new player. This is either a problem with our servers or your internet connection. Please try again later.',
            });
          }
        });
    }
  }

  handleValidation() {
    if (!this.state.firstName || !this.state.lastName) {
      this.setState({
        error: 'Please enter both a first and last name',
      });
      return false;
    } else if (!this.state.rating) {
      this.setState({
        error: 'Please enter a rating',
      });
      return false;
    }
    this.setState({
      error: '',
    });
    return true;
  }

  render() {
    return (
      <div>
        <h2>Register form</h2>
        {!this.state.error || <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First Name
            <input type="text" id="firstName" value={this.state.firstName} name="firstName" onChange={this.handleInput} placeholder="first name" />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input type="text" id="lastName" value={this.state.lastName} name="lastName" onChange={this.handleInput} placeholder="last name" />
          </label>
          <label htmlFor="rating">
            Rating
            <input type="text" id="rating" value={this.state.rating} name="rating" onChange={this.handleInput} placeholder="rating" />
          </label>
          <label htmlFor="handedness">
            Handedness
            <select id="handedness" value={this.state.handedness} name="handedness" onChange={this.handleInput}>
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

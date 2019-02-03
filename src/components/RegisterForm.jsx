import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import url from '../utils/const';
import { validateEmail, formatName, checkPasswordStrength } from '../utils/helpers';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      const data = JSON.stringify({
        first_name: formatName(this.state.firstName),
        last_name: formatName(this.state.lastName),
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirmPassword,
      });
      axios({
        method: 'post',
        url: `${url}/user`,
        data,
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => {
          sessionStorage.setItem('token', response.data.token);
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          this.props.navigate('../roster');
        })
        .catch(error => console.log(error));
    }
  }

  handleValidation() {
    if (!this.state.firstName || !this.state.lastName) {
      this.setState({
        error: 'Please enter both a first and last name',
      });
      return false;
    } else if (!validateEmail(this.state.email)) {
      this.setState({
        error: 'Please enter a vaild email address',
      });
      return false;
    } else if (!checkPasswordStrength(this.state.password)) {
      this.setState({
        error: 'Passwords must be at least 8 characters in length and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.',
      });
      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: 'Passwords do not match, please confirm your password.',
      });
      return false;
    }
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
            <input type="text" id="firstName" name="firstName" onChange={this.handleInput} placeholder="first name" />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input type="text" id="lastName" name="lastName" onChange={this.handleInput} placeholder="last name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" id="email" name="email" onChange={this.handleInput} placeholder="email" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" name="password" onChange={this.handleInput} placeholder="password" />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleInput} placeholder="confirm password" />
          </label>
          <input type="submit" id="register" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RegisterForm;

RegisterForm.propTypes = {
  navigate: PropTypes.func,
};

RegisterForm.defaultProps = {
  navigate: () => {},
};

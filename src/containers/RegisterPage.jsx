import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import url from '../utils/const';
import { validateEmail, formatName, checkPasswordStrength } from '../utils/helpers';
import RegisterForm from '../components/RegisterForm';


class RegisterPage extends Component {
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
            error: '',
          });
          this.props.onLogin();
          this.props.navigate('../roster');
        })
        .catch(error => {
          if (error.response.data.error.message === 'Resource already exists.') {
            this.setState({
              error: 'I\'m sorry, this name already exists in our system. Please use a different first or last name',
            });
          } else {
            this.setState({
              error: 'We\'re having trouble creating your account. This is either a problem with our servers or your internet connection. Please try again later.',
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
    this.setState({
      error: '',
    });
    return true;
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box box-layout__box--form">
          <h1 className="form__title">Register.</h1>
          <RegisterForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            error={this.state.error}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default RegisterPage;

RegisterPage.propTypes = {
  navigate: PropTypes.func,
  onLogin: PropTypes.func,
};

RegisterPage.defaultProps = {
  navigate: () => {},
  onLogin: () => {},
};

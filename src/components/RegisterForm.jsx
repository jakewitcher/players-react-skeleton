import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const url = 'https://players-api.developer.alchemy.codes/api/user';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirmPassword,
    });
    axios({
      method: 'post',
      url,
      data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        sessionStorage.setItem('token', JSON.parse(response).token);
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

  render() {
    return (
      <div>
        <h2>Register form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            <input type="text" id="firstName" name="firstName" onChange={this.handleInput} placeholder="first name" />
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" name="lastName" onChange={this.handleInput} placeholder="last name" />
          </label>
          <label htmlFor="email">
            <input type="email" id="email" name="email" onChange={this.handleInput} placeholder="email" />
          </label>
          <label htmlFor="password">
            <input type="password" id="password" name="password" onChange={this.handleInput} placeholder="password" />
          </label>
          <label htmlFor="confirmPassword">
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleInput} placeholder="confirm password" />
          </label>
          <input type="submit" value="Submit" />
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

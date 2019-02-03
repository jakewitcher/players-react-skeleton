import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import url from '../utils/const';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
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
      email: this.state.email,
      password: this.state.password,
    });
    axios({
      method: 'post',
      url: `${url}/login`,
      data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        sessionStorage.setItem('token', response.data.token);
        this.setState({
          email: '',
          password: '',
          error: '',
        });
        this.props.navigate('../roster');
      })
      .catch(error => {
        if (error.response.data.error.message === 'Email or password not found') {
          this.setState({
            error: 'Incorrect email or password, please try again or create a new account.',
          });
        } else {
          this.setState({
            error: 'We\'re having trouble creating your account. This is either a problem with our servers or your internet connection. Please try again later.',
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Register form</h2>
        {!this.state.error || <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" value={this.state.email} name="email" onChange={this.handleInput} placeholder="email" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" value={this.state.password} name="password" onChange={this.handleInput} placeholder="password" />
          </label>
          <input type="submit" id="login" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  navigate: PropTypes.func,
};

LoginForm.defaultProps = {
  navigate: () => {},
};

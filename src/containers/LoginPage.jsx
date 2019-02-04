import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import url from '../utils/const';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
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
        this.props.onLogin();
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
        <h1>Login page</h1>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          error={this.state.error}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = {
  navigate: PropTypes.func,
  onLogin: PropTypes.func,
};

LoginPage.defaultProps = {
  navigate: () => {},
  onLogin: () => {},
};

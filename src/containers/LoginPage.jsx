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
        const username = `${response.data.user.first_name} ${response.data.user.last_name}`;
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('username', username);
        this.setState({
          email: '',
          password: '',
          error: '',
        });
        this.props.onLogin(username);
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
      <div className="box-layout">
        <div className="box-layout__box box-layout__box--form">
          <h1 className="box-layout__title">Login.</h1>
          <LoginForm
            email={this.state.email}
            password={this.state.password}
            error={this.state.error}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

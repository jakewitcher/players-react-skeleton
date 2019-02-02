import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const url = 'https://players-api.developer.alchemy.codes/api/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      url,
      data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        console.log(response);
        this.setState({
          email: '',
          password: '',
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
          <label htmlFor="email">
            <input type="email" id="email" name="email" onChange={this.handleInput} placeholder="email" />
          </label>
          <label htmlFor="password">
            <input type="password" id="password" name="password" onChange={this.handleInput} placeholder="password" />
          </label>
          <input type="submit" value="Submit" />
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

import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => {
  const {
    email,
    password,
    error,
    handleInput,
    handleSubmit,
  } = props;
  return (
    <div>
      <h2>Register form</h2>
      {!error || <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="email" id="email" value={email} name="email" onChange={handleInput} placeholder="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" value={password} name="password" onChange={handleInput} placeholder="password" />
        </label>
        <input type="submit" id="login" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  email: '',
  password: '',
  error: '',
  handleInput: () => {},
  handleSubmit: () => {},
};

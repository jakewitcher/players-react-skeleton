import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = props => {
  const {
    error,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    handleInput,
    handleSubmit,
  } = props;
  return (
    <div>
      <h2>Register form</h2>
      {!error || <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" value={firstName} name="firstName" onChange={handleInput} placeholder="first name" />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" value={lastName} name="lastName" onChange={handleInput} placeholder="last name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" value={email} name="email" onChange={handleInput} placeholder="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" value={password} name="password" onChange={handleInput} placeholder="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" id="confirmPassword" value={confirmPassword} name="confirmPassword" onChange={handleInput} placeholder="confirm password" />
        </label>
        <input type="submit" id="register" value="Submit" />
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  error: PropTypes.string,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
  handleInput: () => {},
  handleSubmit: () => {},
};

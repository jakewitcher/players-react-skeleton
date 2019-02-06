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
      {!error || <p className="error">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="firstName">
          <p className="form__label-name">First Name</p>
          <input className="form__input" type="text" id="firstName" value={firstName} name="firstName" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="lastName">
          <p className="form__label-name">Last Name</p>
          <input className="form__input" type="text" id="lastName" value={lastName} name="lastName" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="email">
          <p className="form__label-name">Email</p>
          <input className="form__input" type="email" id="email" value={email} name="email" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="password">
          <p className="form__label-name">Password</p>
          <input className="form__input" type="password" id="password" value={password} name="password" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="confirmPassword">
          <p className="form__label-name">Confirm Password</p>
          <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} name="confirmPassword" onChange={handleInput} />
        </label>
        <input className="button button--form-submit" type="submit" id="register" value="Submit" />
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
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

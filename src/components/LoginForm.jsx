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
      {!error || <p className="error">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="email">
          <p className="form__label-name">Email</p>
          <input className="form__input" type="email" id="email" value={email} name="email" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="password">
          <p className="form__label-name">Password</p>
          <input className="form__input" type="password" id="password" value={password} name="password" onChange={handleInput} />
        </label>
        <input className="button button--form-submit" type="submit" id="login" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  email: '',
  password: '',
  error: '',
};

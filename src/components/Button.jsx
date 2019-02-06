import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Button = ({ page, label, mod }) => (
  /* eslint-disable */
    <Link to={page} className={`button${mod}`}>{label}</Link>
  /* eslint-disable */
);

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mod: PropTypes.string,
  page: PropTypes.string,
};

Button.defaultProps = {
  mod: '',
  page: '/',
};

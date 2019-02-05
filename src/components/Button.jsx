import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Button = ({ page, label }) => (
  /* eslint-disable */
    <Link to={page} className="button">{label}</Link>
  /* eslint-disable */
);

export default Button;

Button.propTypes = {
  page: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  page: '/',
};

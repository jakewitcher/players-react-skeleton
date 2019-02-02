import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Button = props => {
  const { page } = props;
  return <Link to={page}>{page}</Link>; // eslint-disable-line
};

export default Button;

Button.propTypes = {
  page: PropTypes.string,
};

Button.defaultProps = {
  page: '/',
};

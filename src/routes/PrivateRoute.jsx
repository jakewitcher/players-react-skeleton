import React from 'react';
import { Redirect } from '@reach/router';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => { return isAuthenticated ? <Component {...rest}/> : <Redirect from="" to="/" noThrow /> } // eslint-disable-line

export default PrivateRoute;

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

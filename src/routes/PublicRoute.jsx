import React from 'react';
import { Redirect } from '@reach/router';
import PropTypes from 'prop-types';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => { return isAuthenticated ? <Redirect from="" to="/roster" noThrow /> : <Component {...rest}/> } // eslint-disable-line

export default PublicRoute;

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

PublicRoute.defaultProps = {
  isAuthenticated: false,
};

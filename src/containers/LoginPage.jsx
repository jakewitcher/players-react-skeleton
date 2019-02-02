import React from 'react';

import LoginForm from '../components/LoginForm';

const LoginPage = props => (
  <div>
    <h1>Login page</h1>
    <LoginForm {...props} />
  </div>
);

export default LoginPage;

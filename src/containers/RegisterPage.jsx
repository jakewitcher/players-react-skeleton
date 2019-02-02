import React from 'react';

import RegisterForm from '../components/RegisterForm';

const RegisterPage = props => (
  <div>
    <h1>Register page</h1>
    <RegisterForm {...props} />
  </div>
);

export default RegisterPage;

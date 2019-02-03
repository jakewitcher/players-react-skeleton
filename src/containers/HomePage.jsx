import React from 'react';

import Button from '../components/Button';

const HomePage = () => (
  <div>
    <h1>Home page</h1>
    <p>Register</p>
    <Button page="register" />
    <p>Login</p>
    <Button page="login" />
  </div>
);

export default HomePage;

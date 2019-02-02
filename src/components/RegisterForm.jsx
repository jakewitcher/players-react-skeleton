import React from 'react';

const RegisterForm = () => (
  <div>
    <h2>Register form</h2>
    <form>
      <input type="text" placeholder="first name" />
      <input type="text" placeholder="last name" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default RegisterForm;

import React from 'react';

import Button from '../components/Button';

const HomePage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <div className="home__title-box">
        <h1 className="home__title">Lawn Darts</h1>
        <h2 className="home__subtitle">Fantasy League</h2>
      </div>
      <div className="home__links">
        <Button page="login" label="Login" />
        <Button page="register" label="Register" />
      </div>
    </div>
  </div>
);

export default HomePage;

import React from 'react';
import { Router } from '@reach/router';

import Header from '../components/Header';
import Dashboard from '../containers/DashboardPage';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import PlayerPage from '../containers/PlayerPage';
import RegisterPage from '../containers/RegisterPage';

const AppRouter = () => (
  <div>
    <Header />
    <Router>
      <HomePage path="/" />
      <RegisterPage path="register" />
      <LoginPage path="login" />
      <Dashboard path="roster" />
      <PlayerPage path="roster/player/new" />
    </Router>
  </div>
);

export default AppRouter;

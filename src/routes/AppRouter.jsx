import React from 'react';
import { Router } from '@reach/router';

import Header from '../components/Header';
import Dashboard from '../containers/DashboardPage';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import PlayerPage from '../containers/PlayerPage';
import RegisterPage from '../containers/RegisterPage';
import NotFoundPage from '../containers/NotFoundPage';

const AppRouter = () => (
  <div>
    <Header />
    <Router>
      <HomePage path="/" />
      <RegisterPage path="register" />
      <LoginPage path="login" />
      <Dashboard path="roster" />
      <PlayerPage path="player/new" />
      <NotFoundPage default />
    </Router>
  </div>
);

export default AppRouter;
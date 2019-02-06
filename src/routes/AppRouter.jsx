import React, { Component } from 'react';
import { Router } from '@reach/router';
import validator from 'validator';
import RosterPage from '../containers/RosterPage';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import PlayerPage from '../containers/PlayerPage';
import RegisterPage from '../containers/RegisterPage';
import NotFoundPage from '../containers/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: typeof sessionStorage.getItem('token') === 'string' && validator.isJWT(sessionStorage.getItem('token')),
      username: sessionStorage.getItem('username') || '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin(username) {
    this.setState({
      isAuthenticated: true,
      username,
    });
  }

  onLogout() {
    sessionStorage.removeItem('token');
    this.setState({
      isAuthenticated: false,
      username: '',
    });
  }

  render() {
    return (
      <div>
        <Router>
          <PublicRoute path="/" component={HomePage} isAuthenticated={this.state.isAuthenticated} />
          <PublicRoute path="register" component={RegisterPage} isAuthenticated={this.state.isAuthenticated} onLogin={this.onLogin} />
          <PublicRoute path="login" component={LoginPage} isAuthenticated={this.state.isAuthenticated} onLogin={this.onLogin} />
          <PrivateRoute path="roster" component={RosterPage} isAuthenticated={this.state.isAuthenticated} username={this.state.username} onLogout={this.onLogout} />
          <PrivateRoute path="player/new" component={PlayerPage} isAuthenticated={this.state.isAuthenticated} />
          <NotFoundPage default />
        </Router>
      </div>
    );
  }
}

export default AppRouter;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import RosterBranch from '../components/RosterBranch';
import url from '../utils/const';

class RosterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      error: '',
      loading: true,
    };
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
    this.setRoster = this.setRoster.bind(this);
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    this.setRoster(token);
  }

  setRoster(token) {
    axios({
      method: 'get',
      url: `${url}/players`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        this.setState({
          roster: response.data.players,
          error: '',
          loading: false,
        });
      })
      .catch(error => {
        if (error) {
          this.setState({
            error: 'We\'re having trouble gathering up your players. This is either a problem with our servers or your internet connection. Please try again later.',
            loading: false,
          });
        }
      });
  }

  handleDeletePlayer(id) {
    const token = sessionStorage.getItem('token');
    axios({
      method: 'delete',
      url: `${url}/players/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        this.setRoster(token);
      })
      .catch(error => {
        if (error) {
          this.setState({
            error: 'We\'re having trouble deleting your player. This is either a problem with our servers or your internet connection. Please try again later.',
          });
        }
      });
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box box-layout__box--roster">
          <Header onLogout={this.props.onLogout} username={this.props.username} />
          <h1 className="box-layout__title" >Roster.</h1>
          {!this.state.error || <p>{this.state.error}</p>}
          <RosterBranch
            error={this.state.error}
            roster={this.state.roster}
            loading={this.state.loading}
            removePlayer={this.handleDeletePlayer}
          />
          <Button page="../player/new" label="Create New" mod=" button--create" />
        </div>
      </div>
    );
  }
}

export default RosterPage;

RosterPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string,
};

RosterPage.defaultProps = {
  username: '',
};


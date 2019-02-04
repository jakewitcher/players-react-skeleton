import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Roster from '../components/Roster';
import url from '../utils/const';

class RosterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      error: '',
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
        });
      })
      .catch(error => {
        if (error) {
          this.setState({
            error: 'We\'re having trouble gathering up your players. This is either a problem with our servers or your internet connection. Please try again later.',
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
      <div>
        <h1>Roster page</h1>
        <Roster
          roster={this.state.roster}
          error={this.state.error}
          removePlayer={this.handleDeletePlayer}
        />
        <Button page="../player/new" />
      </div>
    );
  }
}

export default RosterPage;

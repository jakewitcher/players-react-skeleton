import React, { Component } from 'react';
import axios from 'axios';
import url from '../utils/const';

import Player from './Player';

class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      error: '',
    };
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');
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
    const { roster } = this.state;
    return (
      <div>
        {!this.state.error || <p>{this.state.error}</p>}
        {
          roster.length === 0 ||
          roster.map(player =>
            (<Player
              firstName={player.first_name}
              lastName={player.last_name}
              rating={player.rating}
              handedness={player.handedness}
              id={player.id}
              remove={this.handleDeletePlayer}
              key={player.id}
            />))
        }
      </div>
    );
  }
}

export default Roster;

import React, { Component } from 'react';
import axios from 'axios';
import url from '../utils/const';

import Player from './Player';

class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
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
        });
      })
      .catch(error => console.log(error));
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
            });
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  render() {
    const { roster } = this.state;
    return (
      <div>
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

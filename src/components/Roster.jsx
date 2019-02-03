import React, { Component } from 'react';
import axios from 'axios';

import Player from './Player';

const url = 'https://players-api.developer.alchemy.codes/api/players';

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
      url,
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
      url: `${url}/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        axios({
          method: 'get',
          url,
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

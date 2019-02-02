import React, { Component } from 'react';

import Player from './Player';

class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [{ name: 'player1' }, { name: 'player2' }, { name: 'player3' }],
    };
  }

  render() {
    const { roster } = this.state;
    return (
      <div>
        {roster.map(player => <Player name={player.name} key={player.name} />)}
      </div>
    );
  }
}

export default Roster;

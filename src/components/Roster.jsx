import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const Roster = ({ roster, removePlayer }) => (
  <div className="roster">
    {
      roster.length === 0 ||
      roster.map(player =>
        (<Player
          firstName={player.first_name}
          lastName={player.last_name}
          rating={player.rating}
          handedness={player.handedness}
          id={player.id}
          removePlayer={removePlayer}
          key={player.id}
        />))
    }
  </div>
);

export default Roster;

Roster.propTypes = {
  roster: PropTypes.arrayOf(PropTypes.object),
  removePlayer: PropTypes.func.isRequired,
};

Roster.defaultProps = {
  roster: [],
};

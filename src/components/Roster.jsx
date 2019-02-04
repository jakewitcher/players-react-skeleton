import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const Roster = props => {
  const {
    roster,
    error,
    removePlayer,
    onLogout,
  } = props;
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      {!error || <p>{error}</p>}
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
};

export default Roster;

Roster.propTypes = {
  roster: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  removePlayer: PropTypes.func,
  onLogout: PropTypes.func,
};

Roster.defaultProps = {
  roster: [],
  error: '',
  removePlayer: () => {},
  onLogout: () => {},
};

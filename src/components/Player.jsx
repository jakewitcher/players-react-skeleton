import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  const { name } = props;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Player;

Player.propTypes = {
  name: PropTypes.string,
};

Player.defaultProps = {
  name: 'player name',
};

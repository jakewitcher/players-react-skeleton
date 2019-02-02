import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  const { firstName, lastName, rating, handedness } = props;
  return (
    <div>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{`Rating: ${rating}`}</p>
      <p>{`${handedness} handed`}</p>
    </div>
  );
};

export default Player;

Player.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.number,
  handedness: PropTypes.string,
};

Player.defaultProps = {
  firstName: '',
  lastName: '',
  rating: 0,
  handedness: '',
};

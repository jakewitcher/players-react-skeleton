import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  const {
    firstName,
    lastName,
    rating,
    handedness,
    removePlayer,
    id,
  } = props;
  return (
    <div className="player">
      <div className="player__data">
        <p className="player__name">{`${firstName} ${lastName}`}</p>
        <ul>
          <li className="player__stats">{`Rating: ${rating}`}</li>
          <li className="player__stats">{`${handedness} handed`}</li>
        </ul>
      </div>
      <div>
        <button className="delete button button--delete" onClick={() => removePlayer(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Player;

Player.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handedness: PropTypes.string,
  id: PropTypes.string,
  removePlayer: PropTypes.func.isRequired,
};

Player.defaultProps = {
  firstName: '',
  lastName: '',
  rating: '',
  handedness: '',
  id: '',
};

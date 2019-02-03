import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  const {
    firstName,
    lastName,
    rating,
    handedness,
    remove,
    id,
  } = props;
  return (
    <div>
      <p>{`${firstName} ${lastName}`}</p>
      <ul>
        <li>{`Rating: ${rating}`}</li>
        <li>{`${handedness} handed`}</li>
      </ul>
      <button className="delete" onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default Player;

Player.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.number,
  handedness: PropTypes.string,
  id: PropTypes.string,
  remove: PropTypes.func,
};

Player.defaultProps = {
  firstName: '',
  lastName: '',
  rating: 0,
  handedness: '',
  id: '',
  remove: () => {},
};

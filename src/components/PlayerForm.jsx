import React from 'react';
import PropTypes from 'prop-types';

const PlayerForm = props => {
  const {
    firstName,
    lastName,
    rating,
    handedness,
    error,
    handleInput,
    handleSubmit,
  } = props;
  return (
    <div>
      <h2>Register form</h2>
      {!error || <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" value={firstName} name="firstName" onChange={handleInput} placeholder="first name" />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" value={lastName} name="lastName" onChange={handleInput} placeholder="last name" />
        </label>
        <label htmlFor="rating">
          Rating
          <input type="text" id="rating" value={rating} name="rating" onChange={handleInput} placeholder="rating" />
        </label>
        <label htmlFor="handedness">
          Handedness
          <select id="handedness" value={handedness} name="handedness" onChange={handleInput}>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </label>
        <input type="submit" id="create" value="Submit" />
      </form>
    </div>
  );
};

export default PlayerForm;

PlayerForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.number,
  handedness: PropTypes.string,
  error: PropTypes.string,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};

PlayerForm.defaultProps = {
  firstName: '',
  lastName: '',
  rating: null,
  handedness: '',
  error: '',
  handleInput: () => {},
  handleSubmit: () => {},
};

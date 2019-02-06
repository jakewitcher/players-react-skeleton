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
      {!error || <p className="error">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="firstName">
          <p className="form__label-name">First Name</p>
          <input className="form__input" type="text" id="firstName" value={firstName} name="firstName" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="lastName">
          <p className="form__label-name">Last Name</p>
          <input className="form__input" type="text" id="lastName" value={lastName} name="lastName" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="rating">
          <p className="form__label-name">Rating</p>
          <input className="form__input" type="text" id="rating" value={rating} name="rating" onChange={handleInput} />
        </label>
        <label className="form__label" htmlFor="handedness">
          <p className="form__label-name">Handedness</p>
          <select className="form__input" id="handedness" value={handedness} name="handedness" onChange={handleInput}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
        <input className="button button--form-submit" type="submit" id="create" value="Submit" />
      </form>
    </div>
  );
};

export default PlayerForm;

PlayerForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.string,
  handedness: PropTypes.string,
  error: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

PlayerForm.defaultProps = {
  firstName: '',
  lastName: '',
  rating: '',
  handedness: '',
  error: '',
};

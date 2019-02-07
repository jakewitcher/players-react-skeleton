import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onLogout, username }) => (
  <div className="header">
    <p className="header__username">{username}</p>
    <button className="button button--logout" id="logout" onClick={onLogout}>Logout</button>
  </div>
);

export default Header;

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string,
};

Header.defaultProps = {
  username: '',
};


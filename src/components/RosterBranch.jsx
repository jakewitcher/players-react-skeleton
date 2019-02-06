import React from 'react';
import PropTypes from 'prop-types';
import Roster from './Roster';
import Loading from './Loading';

const RosterBranch = props => {
  const { loading, ...rest } = props;
  if (loading) {
    return <Loading />;
  }
  return <Roster {...rest} />;
};

export default RosterBranch;

RosterBranch.propTypes = {
  loading: PropTypes.bool.isRequired,
};


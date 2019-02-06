import React from 'react';
import Roster from './Roster';
import Loading from './Loading';

const RosterBranch = props => {
  const { status } = props;
  return (
    <div>
      <Roster />
      <Loading />
    </div>
  );
};

export default RosterBranch;

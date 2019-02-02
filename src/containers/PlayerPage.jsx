import React from 'react';

import PlayerForm from '../components/PlayerForm';

const PlayerPage = props => (
  <div>
    <h1>Player page</h1>
    <PlayerForm {...props} />
  </div>
);

export default PlayerPage;

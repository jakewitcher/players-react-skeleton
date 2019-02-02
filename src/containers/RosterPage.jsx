import React from 'react';

import Button from '../components/Button';
import Roster from '../components/Roster';
import User from '../components/User';

const RosterPage = () => (
  <div>
    <h1>Roster page</h1>
    <User />
    <Roster />
    <Button page="../player/new" />
  </div>
);

export default RosterPage;

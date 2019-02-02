import React from 'react';

import Button from '../components/Button';
import Roster from '../components/Roster';
import User from '../components/User';

const DashboardPage = () => (
  <div>
    <h1>Dashboard page</h1>
    <User />
    <Roster />
    <Button page="../player/new" />
  </div>
);

export default DashboardPage;

import React from 'react';

const PlayerForm = () => (
  <div>
    <h2>Player form</h2>
    <form>
      <input type="text" placeholder="first name" />
      <input type="text" placeholder="last name" />
      <input type="number" placeholder="rating" />
      <input type="text" placeholder="left or right" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default PlayerForm;

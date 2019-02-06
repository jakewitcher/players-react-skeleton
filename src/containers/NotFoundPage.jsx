import React from 'react';
import { Link } from '@reach/router';

const NotFoundPage = () => (
  /* eslint-disable */
  <div className="box-layout">
    <div className="not-found">
      <h1 className="not-found__title">These aren&apos;t the droids you&apos;re looking for.</h1>
      <Link to="/" className="button button--home">Return Home</Link>
    </div>
  </div>
  /* eslint-disable */
);

export default NotFoundPage;

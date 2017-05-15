/* eslint-disable global-require */
import React from 'react';
import './styles.css';

export default () => (
  <div className="filter-icon-wrapper">
    <img
      src={require('./filter.png')}
      srcSet={`${require('./filter@2x.png')} 2x, ${require('./filter@3x.png')} 3x`}
      alt=""
      className="filter-icon"
    />
  </div>
);

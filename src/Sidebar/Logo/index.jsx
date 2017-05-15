/* eslint-disable global-require */
import React from 'react';
import './styles.css';

export default () => (
  <img
    src={require('./logo.png')}
    srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
    alt=""
    className="logo"
  />
);

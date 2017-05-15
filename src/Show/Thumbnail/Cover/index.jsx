/* eslint-disable global-require */
import React from 'react';
import './styles.css';

export default () => (
  <img
    src={require('./main.jpg')}
    srcSet={`${require('./main@2x.jpg')} 2x, ${require('./main@3x.jpg')} 3x`}
    alt=""
    className="thumbnail-cover"
  />
);

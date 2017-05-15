/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './styles.css';

import Label from '../../Label';

export default props => (
  <div
    className={classNames('card-container', {
      'card-badge-sale': props.isSale,
    })}
  >
    <img
      className="card-img"
      src={require('./bitmap.jpg')}
      srcSet={`
        ${require('./bitmap@2x.jpg')} 2x,
        ${require('./bitmap@3x.jpg')} 3x
        `}
      alt=""
    />
    <div className="card-price">
      <Link to="/detail">$170</Link>
    </div>
    <div className="label-wrapper">
      <Label>sale</Label>
    </div>
  </div>
);

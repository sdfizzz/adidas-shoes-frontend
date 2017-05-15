/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => (
  <nav id="main-menu">
    <div className="main-menu-selected">
      <Link to="/">
        <span>SPORTS</span>
        <img src={require('./arrow.svg')} srcSet="" alt="" className="menu-arrow" />
      </Link>
    </div>
    <nav id="sub-menu">
      <div className="sub-menu-selected">
        <Link to="/">SHOES</Link>
      </div>
      <div>
        <Link to="/">CLOTHING</Link>
      </div>
      <div>
        <Link to="/">ACCESORIES</Link>
      </div>
    </nav>
    <div>
      <Link to="/">BRANDS</Link>
    </div>
    <div>
      <Link to="/">MICOACH</Link>
    </div>
  </nav>
);

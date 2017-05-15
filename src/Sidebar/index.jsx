import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

require('./styles.css');

export default () => (
  <aside className="sidebar-container">
    <Logo />
    <Search />
    <Menu />
  </aside>
);

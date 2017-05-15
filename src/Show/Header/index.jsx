import React from 'react';
import './styles.css';

import Label from '../../Label';

export default () => (
  <header className="header-container">
    <div className="header-left-block">
      <h1>ULTRA<br />BOOST</h1>
      <button className="button-save">SAVE</button>
    </div>
    <div className="header-right-block">
      <div className="header-right-block-labels">
        <button className="label-dark-gray" />
        <button className="label-blue" />
        <button className="label-black" />
        <button className="label-gray" />
        <div className="label-sale-wrapper">
          <Label>sale</Label>
        </div>
      </div>
      <h2>$170</h2>
    </div>
  </header>
);

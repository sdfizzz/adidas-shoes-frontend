import React from 'react';
import './styles.css';

import Header from './Header';
import Thumbnail from './Thumbnail';
import Description from './Description';

export default () => (
  <section>
    <div className="product-main-panel">
      <Header />
      <Thumbnail />
      <Description />
    </div>
    <button className="product-buy-button">Buy Now</button>
  </section>
);

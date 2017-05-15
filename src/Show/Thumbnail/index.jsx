import React from 'react';
import './styles.css';

import Cover from './Cover';
import Card from './Card';
import Separator from './Separator';
import MoreButton from './MoreButton';

export default () => (
  <section>
    <Cover />
    <div className="thumbnail-cards">
      <Card />
      <Card />
      <Card />
      <Card isSelected />
      <Separator />
      <MoreButton />
    </div>
  </section>
);

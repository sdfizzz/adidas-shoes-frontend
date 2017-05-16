import React from 'react';
import styled from 'styled-components';

import ThumbImg from './ThumbImg';
import Card from './Card';
import Separator from './Separator';
import MoreButton from './MoreButton';

const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export default () => (
  <section>
    <ThumbImg />
    <Cards>
      <Card />
      <Card />
      <Card />
      <Card isSelected />
      <Separator />
      <MoreButton />
    </Cards>
  </section>
);

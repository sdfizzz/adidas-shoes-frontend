import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';

const MainPanel = styled.div`
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  font-family: AvenirNext-Bold;
  padding: 15px 31px 31px 31px;
`;

const BuyButton = styled.button`
  border: none;
  position: sticky;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  margin-top: 176px;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 30px 0 30px 0;
  font-size: 32px;
  color: #fff;
  font-family: AvenirNext-Bold;
  text-transform: uppercase;
  outline: none;
`;

export default () => (
  <section>
    <MainPanel>
      <Header />
      <Gallery />
      <Description />
    </MainPanel>
    <BuyButton>Buy Now</BuyButton>
  </section>
);

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 64px;
  padding-bottom: 14px;
  margin: 0;
`;
const Button = styled.button`
  height: 75px;
  width: 75px;
  font-size: 18px;
  border-width: 0;
  border-radius: 50%;
  color: #fff;
  background-color: #e3e3e3;
  font-family: AvenirNext-Bold;
  outline: none;
`;

export default () => (
  <div>
    <H1>ULTRA<br />BOOST</H1>
    <Button>SALE</Button>
  </div>
);

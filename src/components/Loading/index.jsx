/* eslint-disable global-require */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  animation: ${rotation} infinite 2s linear;
  @media only screen and (min-width: 768px){
    width: 100px;
  }
`;

export default () => <Img src={require('./loader.svg')} />;

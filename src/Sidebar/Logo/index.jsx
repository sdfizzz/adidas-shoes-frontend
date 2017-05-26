/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  position: absolute;
  top: 0;
  object-fit: contain;
  width: 52px;
  height: 52px;
  margin: 0 10px;
  padding: 6px;
  @media only screen and (min-width: 768px){
    position: relative;
    width: 94px;
    height: 94px;
    margin: 30px auto;
  }
`;

export default () => <Img src={require('./logo.svg')} srcSet="" alt="" />;

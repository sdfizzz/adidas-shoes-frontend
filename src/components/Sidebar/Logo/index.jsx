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
    width: 62px;
    height: 62px;
    margin: 20px auto;
  }
`;

export default () => <Img src={require('./logo.svg')} srcSet="" alt="" />;

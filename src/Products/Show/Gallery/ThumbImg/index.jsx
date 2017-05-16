/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

export default () => (
  <Img
    src={require('./main.jpg')}
    srcSet={`${require('./main@2x.jpg')} 2x, ${require('./main@3x.jpg')} 3x`}
    alt=""
  />
);

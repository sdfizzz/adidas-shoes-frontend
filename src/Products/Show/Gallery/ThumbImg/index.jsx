/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

export default props => <Img src={props.src} />;

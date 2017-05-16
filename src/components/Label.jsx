import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-family: AvenirNext-Bold;
  background-color: #ff5c5c;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  height: 32px;
  width: 76px;
  padding: 6px 20px;
  margin: 0;
  text-transform: uppercase;
`;

export default props => <Span>{props.children}</Span>;

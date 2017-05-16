/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  display: block;
  color: #3c3c3c;
  ${props => props.isSelected && 'color : #fff'};
  margin-bottom: 30px;
  font-family: AvenirNext-Bold;
`;

const Img = styled.img`
  visibility: hidden;
  ${props => props.isSelected && 'visibility: visible'};
  width: 14px;
  margin-left: 7px;
  padding-bottom: 4px;
`;

export default props => (
  <div>
    <StyledLink to={props.to} isSelected={props.isSelected}>
      {props.name}
      <Img src={require('./arrow.svg')} srcSet="" alt="" isSelected={props.isSelected} />
    </StyledLink>
    <div>{props.children}</div>
  </div>
);

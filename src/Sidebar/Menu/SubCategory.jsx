import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 24px;
  font-family: AndaleMono;
  text-decoration: none;
  display: block;
  margin-bottom: 25px;
  color: #3c3c3c;
  ${props => props.isSelected && 'color: #fff'};
`;

export default props => (
  <div>
    <StyledLink to={props.to} isSelected={props.isSelected}>
      <span>{props.name}</span>
    </StyledLink>
  </div>
);

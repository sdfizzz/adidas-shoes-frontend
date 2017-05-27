import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-family: AndaleMono;
  text-decoration: none;
  display: block;
  margin-bottom: 25px;
  color: #3c3c3c;
  &.active{
    color: #fff;
  }
  &:hover{
    transition: color 0.5s ease-out;
    color: #fff;
  }
}`;

export default props => (
  <StyledLink to={props.to} activeClassName="active">
    {props.children}
  </StyledLink>
);

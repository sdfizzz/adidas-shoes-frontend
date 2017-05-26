import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 24px;
  font-family: AndaleMono;
  text-decoration: none;
  display: block;
  margin-bottom: 25px;
  color: ${props => (props.isOpened ? '#fff' : '#3c3c3c')};
  transition: color 0.5s ease-out;
  &:hover{
    color: #fff;
  }
  &:active{
    color: #fff;
  }
}`;

export default props => (
  <StyledLink name="list" to={props.to} isOpened={props.isOpened}>
    {props.children}
  </StyledLink>
);

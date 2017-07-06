/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getImage, getPriceString } from '../../functions';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  background-color: #f4f4f4;
  color: #fff;
  padding: 9px;
  box-sizing: border-box;
  margin: 20px 0 0;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const Price = styled.div`
  display: block;
  font-size: 30px;
  text-align: center;
  background-color: #fff;
  background-image: none;
  ${props => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
  padding: 23px 0 27px 0;
  transition: transform .5s;
  &:hover{
    transform: rotate(${props => (props.isSale ? '-5deg' : '5deg')});
    z-index:20;
  }
`;

const StyledLink = styled(Link)`
  width:inherit;
  height: inherit
  text-decoration: none;
  color: #0e0e0e;
  ${props => props.isSale && 'color: #fff'};
`;

export default props => (
  <Container>
    <Img src={getImage(props.image.id, props.image.fileName, 256)} alt="" />
    <StyledLink to={props.to}>
      <Price>
        {getPriceString(props.price, props.currency)}
      </Price>
    </StyledLink>
  </Container>
);

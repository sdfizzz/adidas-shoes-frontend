/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Label from '../../../components/Label';

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

const LabelWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 90px;
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
    <Img
      src={require('./bitmap.jpg')}
      srcSet={`${require('./bitmap@2x.jpg')} 2x, ${require('./bitmap@3x.jpg')} 3x`}
      alt=""
    />
    <StyledLink to={props.to} isSale={props.isSale}>
      <Price isSale={props.isSale}>
        $170
      </Price>
    </StyledLink>
    {props.isSale &&
      <LabelWrapper>
        <Label color="#ff5c5c">sale</Label>
      </LabelWrapper>}
  </Container>
);

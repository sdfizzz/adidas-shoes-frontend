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
  margin: 0 12px 12px 0;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 6px;
`;

const LabelWrapper = styled.div`
  visibility: hidden;
  ${props => props.isSale && 'visibility: visible'};
  position: absolute;
  top: 17px;
  right: 17px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0e0e0e;
  ${props => props.isSale && 'color: #fff'};
`;

const Price = styled.div`
  display: block;
  font-size: 30px;
  text-align: center;
  background-color: #fff;
  background-image: none;
  ${props => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
  text-decoration: none;
  padding: 23px 0 27px 0;
  justify-content: space-between;
`;

export default props => (
  <Container>
    <Img
      src={require('./bitmap.jpg')}
      srcSet={`${require('./bitmap@2x.jpg')} 2x, ${require('./bitmap@3x.jpg')} 3x`}
      alt=""
    />
    <Price isSale={props.isSale}>
      <StyledLink to="/detail" isSale={props.isSale}>$170</StyledLink>
    </Price>
    <LabelWrapper isSale={props.isSale}>
      <Label>sale</Label>
    </LabelWrapper>
  </Container>
);

/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  @media only screen and (min-width: 768px){
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: #ebebeb;
    margin-right: 30px;
  }
`;

const Img = styled.img`
  width: 33px;
  height: 33px;
  margin: 12px;
`;

export default () => (
  <Wrapper>
    <Img
      src={require('./filter.png')}
      srcSet={`${require('./filter@2x.png')} 2x, ${require('./filter@3x.png')} 3x`}
      alt=""
      className="filter-icon"
    />
  </Wrapper>
);

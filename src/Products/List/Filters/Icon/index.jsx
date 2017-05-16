/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 55px;
  height: 55px;
  background-color: #ebebeb;
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

import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Wrapper = styled.aside`
  display: block;
  min-width: 414px;
  width: 30%;
  padding: 0 22px;
  background-color: #0e0e0e;
`;

export default () => (
  <Wrapper>
    <Logo />
    <Search />
    <Menu />
  </Wrapper>
);

import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';
import BackLink from '../components/BackLink';

const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  padding: 10px 0 20px 0;
`;

export default () =>
  <HeaderContainer>
    <BackLink />
    <Title title="3 items in your bag" />
  </HeaderContainer>;

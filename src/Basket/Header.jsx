import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Title from '../components/Title';

const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  padding: 10px 0 20px 0;
`;

const BackLinkContainer = styled.div`
  text-align: right;
`;

const StyledLink = styled(Link)`
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 15px;
  text-decoration: none;
`;

export default () => (
  <HeaderContainer>
    <BackLinkContainer>
      <StyledLink to="/">Continue shopping</StyledLink>
    </BackLinkContainer>
    <Title title="3 items in your bag" />
  </HeaderContainer>
);

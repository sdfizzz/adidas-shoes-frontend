import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLinkContainer = styled.div`
  text-align: right;
`;

const StyledLink = styled(Link)`
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 15px;
  text-decoration: none;
`;

export default () =>
  <BackLinkContainer>
    <StyledLink to="/">Continue shopping</StyledLink>
  </BackLinkContainer>;

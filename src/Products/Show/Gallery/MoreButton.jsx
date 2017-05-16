import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #c0c0c0;
  font-family: AvenirMedium;
  text-align: left;
  border: none;
  background-color: inherit;
`;

export default () => <StyledButton>see<br />more<br />photos</StyledButton>;

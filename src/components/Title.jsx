import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  font-family: GillSans, sans-serif;
  text-decoration: none;
  font-size: 40px;
  font-weight: 600;
  margin-left: 30px;
`;

export default props => <TitleContainer>{props.title}</TitleContainer>;

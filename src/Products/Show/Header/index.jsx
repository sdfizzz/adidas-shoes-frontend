import React from 'react';
import styled from 'styled-components';

import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  color: #393939;
  margin-bottom: 70px;
  @media only screen and (min-width: 768px){
    flex-direction: row;
    position: relative;
    max-height: 40px;
    width: 100%;
    margin-right: 20px;
    justify-content: space-between;
    z-index: 10;
  }
`;

export default () => (
  <Container>
    <LeftBlock />
    <RightBlock />
  </Container>
);

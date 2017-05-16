import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 120px;
  height: 30px;
  margin: auto 0;
  padding: 0 16px;
`;

const Part = styled.div`
  width: 100%;
  height: 3px;
  background-color: #d8d8d8;
`;

export default () => (
  <Container>
    <Part />
    <Part />
    <Part />
  </Container>
);

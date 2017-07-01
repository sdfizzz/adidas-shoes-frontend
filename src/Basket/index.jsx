import React from 'react';
import styled from 'styled-components';

import Sidebar from '../Sidebar';
import BasketPage from './BasketPage';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-spacing: 0;
  border-collapse: collapse;
`;

export default () =>
  <Container>
    <Sidebar />
    <BasketPage />
  </Container>;

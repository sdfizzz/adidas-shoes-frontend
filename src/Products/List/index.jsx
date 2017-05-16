import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Filters from './Filters';
import Card from './Card';

const Container = styled.section`
  display: inline-block;
  padding: 0;
`;

const Hr = styled.hr`
  width: 100%;
  height: 3px;
  opacity: 0.56;
  background-color: #e6e6e6;
  margin: 10px 0;
  border: none;
`;

const CustomGrid = styled(Grid)`
  margin: 0;
  padding: 0 !important;
`;

const CustomCol = styled(Col)`
  padding: 0 12px 12px 0 !important;
`;

const CustomRow = styled(Row)`
  margin: 22px 24px auto 25px !important;
`;

const CardCol = props => (
  <CustomCol xs={12} sm={6} md={4} lg={3}>
    <Card isSale={props.isSale} />
  </CustomCol>
);

export default () => (
  <Container>
    <Filters />
    <Hr />
    <CustomGrid fluid>
      <CustomRow>
        <CardCol isSale />
        <CardCol />
        <CardCol isSale />
        <CardCol />
        <CardCol isSale />
        <CardCol />
        <CardCol isSale />
        <CardCol />
        <CardCol isSale />
        <CardCol />
        <CardCol isSale />
        <CardCol />
      </CustomRow>
    </CustomGrid>
  </Container>
);

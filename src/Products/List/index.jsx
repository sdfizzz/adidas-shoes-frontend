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
  height: 5px;
  margin: 0;
  opacity: 0.5;
  background-color: #e6e6e6;
  border: none;
`;

const CardCol = props => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Card isSale={props.isSale} id="5" />
  </Col>
);

export default () => (
  <Container>
    <Filters />
    <Hr />
    <Grid fluid>
      <Row>
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
      </Row>
    </Grid>
  </Container>
);

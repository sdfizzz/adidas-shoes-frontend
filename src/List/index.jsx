import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css';

import Filter from './Filter';
import Card from './Card';

export default () => (
  <section className="list-container">
    <Grid fluid>
      <Filter />
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Card isSale />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card isSale />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card isSale />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card isSale />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card isSale />
        </Col>
      </Row>
    </Grid>
  </section>
);

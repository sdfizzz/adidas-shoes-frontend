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

const cards = [
  {
    id: 0,
    isSale: true,
  },
  {
    id: 1,
    isSale: false,
  },
  {
    id: 2,
    isSale: true,
  },
  {
    id: 3,
    isSale: false,
  },
];

const CardCol = props => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Card isSale={props.isSale} id={props.id} to={props.to} />
  </Col>
);

export default props => (
  <Container>
    <Filters />
    <Hr />
    <Grid fluid>
      <Row>
        {cards.map(card => (
          <CardCol
            key={card.id}
            id={card.id}
            isSale={card.isSale}
            to={`/products/${props.sport}/${props.category}/${props.id}`}
          />
        ))}
      </Row>
    </Grid>
  </Container>
);

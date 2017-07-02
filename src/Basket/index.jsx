import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from './Header';
import Details from './Details';
import Bill from '../components/Bill';
import Footer from '../components/Footer';

const Container = styled.div`
  justify-content: space-around;
  width: 100%;
`;

const TopContinerPart = styled.div`
  padding: 0 32px;
`;

const DetailsContainer = styled.div`
  margin-bottom: 60px;
`;

const defaultProps = {
  title: 'NEMEZIZ TANGO 17+ 360 AGILITY',
  price: '$220',
  count: '1',
  size: 'M',
};

const Hr = styled.hr`
  width: 100%;
  height: 4px;
  margin: 16px 0;
  opacity: 0.5;
  background-color: #f4f4f4;
  border: none;
`;

const Items = () =>
  <Col xs={12} md={9}>
    <DetailsContainer>
      <Details
        title={defaultProps.title}
        price={defaultProps.price}
        size={defaultProps.size}
        count={defaultProps.count}
      />
      <Hr />
      <Details
        title={defaultProps.title}
        price={defaultProps.price}
        size={defaultProps.size}
        count={defaultProps.count}
      />
    </DetailsContainer>
  </Col>;

export default () =>
  <Container>
    <TopContinerPart>
      <Header />
      <Grid fluid>
        <Row>
          <Items />
          <Col xs={12} md={3}>
            <Bill summ="$440" count="3" checkout />
          </Col>
        </Row>
      </Grid>
    </TopContinerPart>
    <Footer />
  </Container>;

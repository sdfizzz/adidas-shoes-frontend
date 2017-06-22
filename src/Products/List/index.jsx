import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { get } from '../../api';
import { getUniqueSizes, filterCards } from './functions';

import Filters from './Filters';
import Card from './Card';
import Loading from '../../Loading';

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
    <Card
      id={props.id}
      to={props.to}
      price={props.price}
      currency={props.currency}
      image={props.image}
      title={props.title}
    />
  </Col>
);

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], sizes: [], isLoading: false };
    this.fetchData = this.fetchData.bind(this);
    this.handleFilterChanged = this.handleFilterChanged.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sizes: [] });
    this.fetchData(nextProps);
  }

  fetchData(props) {
    const { sport, category } = props.match.params;
    this.setState({ isLoading: true });
    get(`v1/products/${sport}/${category}`).then((json) => {
      this.setState({ cards: json.items, isLoading: false });
    });
  }

  handleFilterChanged(size) {
    const index = this.state.sizes.indexOf(size);
    if (index > -1) {
      this.state.sizes.splice(index, 1);
    } else {
      this.state.sizes.push(size);
    }
    this.setState({ sizes: this.state.sizes });
    this.fetchData(this.props);
  }

  render() {
    const uniqueSizes = getUniqueSizes(this.state.cards);
    const filteredCards = filterCards(this.state.cards, this.state.sizes);

    return (
      <Container>
        <Filters
          sizes={uniqueSizes}
          selected={this.state.sizes}
          handleFilterChanged={this.handleFilterChanged}
        />
        <Hr />
        <Grid fluid>
          <Row>
            {this.state.isLoading
              ? <Loading />
              : filteredCards.map(card => (
                <CardCol
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  currency={card.currency}
                  description={card.description}
                  sizes={card.sizes}
                  image={card.images[0]}
                  to={`/products/${this.props.match.params.sport}/${this.props.match.params.category}/${card.id}`}
                />
                ))}
          </Row>
        </Grid>
      </Container>
    );
  }
}

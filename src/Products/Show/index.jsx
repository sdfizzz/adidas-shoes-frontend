import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Loading from '../../Loading';
import { get } from '../../api';

const MainPanel = styled.div`
  padding: 15px;
  @media only screen and (min-width: 768px){
    display: block;
    box-sizing: border-box;
    background-color: #fff;
    font-family: AvenirNext-Bold;
    padding: 30px;
    padding-top: 15px;
  }
`;

const BuyButton = styled.button`
  border: none;
  position: sticky;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 30px 0 30px 0;
  font-size: 32px;
  color: #fff;
  font-family: AvenirNext-Bold;
  text-transform: uppercase;
  outline: none;
  @media only screen and (min-width: 768px){
    margin-top: 150px;
  }
`;

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {}, isLoading: true };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  fetchData(props) {
    this.setState({ isLoading: true });
    const { sport, category, id } = props.match.params;
    get(`v1/products/${sport}/${category}/${id}`).then(item =>
      this.setState({ item, isLoading: false }),
    );
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <section>
        <MainPanel>
          <Header
            title={this.state.item.title}
            price={this.state.item.price}
            currency={this.state.item.currency}
          />
          <Gallery images={this.state.item.images} />
          <Description content={this.state.item.description} />
        </MainPanel>
        <BuyButton>Buy Now</BuyButton>
      </section>
    );
  }
}

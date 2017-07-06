import React from 'react';
import styled from 'styled-components';

import Label from '../../../Label';
import Colors from './Colors';
import { getPriceString } from '../../functions';

const Container = styled.div`
  display: block;
  @media only screen and (min-width: 768px){
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }
`;

const SaleLabel = styled(Label)`
  margin-top: 100px;
  @media only screen and (min-width: 768px){
    margin: 0;
    top: 20px;
    right: 5px;
  }
`;

const Price = styled.h2`
  position: relative;
  font-size: 80px;
  color: #4949aa;
  font-weight: 400;
  margin: 0;
  text-align: left;
  @media only screen and (min-width: 768px){
    text-align: right;
    top: 70px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: '#ff5c5c' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color) {
    this.setState(() => ({ selectedColor: color }));
  }

  render() {
    const price = getPriceString(this.props.price, this.props.currency);

    return (
      <Container>
        <Colors onChange={this.handleChange} />
        <SaleLabel color={this.state.selectedColor}>sale</SaleLabel>
        <Price>{price}</Price>
      </Container>
    );
  }
}

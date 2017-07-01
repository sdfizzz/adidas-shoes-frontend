import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Order from './Order';

const Container = styled.div`
  display: block;
  font-family: GillSans, sans-serif;
  position: relative;
  width: 100%;
  background-color: #f4f4f4;
  padding: 1px;

  margin-top: 10px;
  @media only screen and (min-width: 1024px){
    margin-top: auto;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #4949aa;
  margin: 5px auto;
`;

const PromoWrapper = styled.div`
  background-color: #fff;
  margin: 6px;
`;

const Input = styled.input`
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 15px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const Promo = () =>
  <PromoWrapper>
    <Input type="text" placeholder="Promo code and sale" />
  </PromoWrapper>;

const CheckoutWrapper = styled.div`
  margin: 6px;
  color: #fff;
  background-color: #551A8B;
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;
const Checkout = () => <CheckoutWrapper>Checkout</CheckoutWrapper>;

export default props =>
  <Container>
    <Order summ={props.summ} count={props.count} />
    <Promo />
    <Checkout />
  </Container>;

import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'react-icheck';
import 'icheck/skins/all.css';

import BackLink from '../components/BackLink';
import TextField from './TextField';
import Payments from './Payments';
import Footer from '../components/Footer';
import Bill from '../components/Bill';

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: AvenirNext-Regular, sans-serif, serif;
`;

const HeaderContainer = styled.div`
  margin: 20px 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 40px;
`;

const SaveHint = styled.div`
  color: #eee;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 40px;
  font-family: AvenirNext-Bold;
  padding: 20px 0 30px;
`;

const LeftColumn = styled.div`
  width: auto;
`;

const RightColumn = styled.div`
  width: 200px;
`;

const Delivery = styled.div`
  font-family: AvenirNext-Bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding: 20px 0;
`;

const InfoLabel = styled.label`
  border: none;
  width: 100%;
  padding-bottom: 5px;
  margin-right: 20px;
  border-bottom: 3px solid #eee;
`;

const PurchaseButton = styled.button`
  margin: 6px;
  color: #fff;
  background-color: #6330db;
  text-align: center;
  padding: 32px 42px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default () =>
  <Container>
    <HeaderContainer>
      <BackLink />
      <SaveHint>Saved</SaveHint>
      <Title>Checkout</Title>
    </HeaderContainer>
    <ContentContainer>
      <LeftColumn>
        <Delivery>Delivery - $3</Delivery>
        <form>
          <Row first>
            <TextField
              id="address"
              placeholder="Ireland,"
              label="Country, street name and number, type of building, city, postal code"
            />
          </Row>
          <Row>
            <TextField id="addressee" placeholder="To" label="Addressee:first and last name" />
            <TextField
              id="phone"
              placeholder="+353 1 ___ - ___ - __"
              label="We will only call youif there any questions regarding your order"
            />
          </Row>
          <Row>
            <InfoLabel htmlFor="info">Delivery by DHL on Wednesday 5 July, 08:00 - 18:00</InfoLabel>
          </Row>
          <Row>
            <Checkbox
              checkboxClass="icheckbox_square-blue"
              increaseArea="40%"
              label="  My shipping and billing informations are
        the same and I agree with all needed agreements"
            />
          </Row>
          <Row>
            <Payments />
          </Row>
          <PurchaseButton type="submit"> purchase $212,38</PurchaseButton>
        </form>
      </LeftColumn>
      <RightColumn>
        <Bill summ="$440" count="3" noCheckout />
      </RightColumn>
    </ContentContainer>
    <Footer />
  </Container>;

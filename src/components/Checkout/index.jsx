import React from 'react';
import styled from 'styled-components';

import media from '../../media';
import BackLink from '../BackLink';
import TextField from './TextField';
import Payments from './Payments';
import Footer from '../Footer';
import Bill from '../Bill';
import Checkbox from '../Checkbox';
import ClickableDate from './ClickableDate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: AvenirNext-Regular, sans-serif, serif;
`;

const HeaderContainer = styled.div`
  margin: 20px 60px;
  font-weight: bold;
`;

const Form = styled.form`
  margin: 0 60px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${media.desktop`
    flex-wrap: nowrap;
  `}
`;

const SaveHint = styled.div`
  color: #eee;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 44px;
  font-family: AvenirNext-Reg;
  padding: 40px 0 30px;
`;

const LeftColumn = styled.div`
  width: auto;
  padding-right: 0;
  flex-basis: 100%;
  ${media.desktop`
    flex-basis: 75%;
    padding-right: 30px;
  `}
`;

const RightColumn = styled.div`
  flex-basis: 100%;
  ${media.desktop`
    flex-basis: 25%;
  `}
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

const StyledTextField = styled(TextField)`
  padding-bottom: 300px;
`;

export default () =>
  <Container>
    <HeaderContainer>
      <BackLink />
      <SaveHint>Saved</SaveHint>
      <Title>Checkout</Title>
    </HeaderContainer>
    <Form>
      <Delivery>Delivery – $3</Delivery>
      <ContentContainer>
        <LeftColumn>
          <Row first>
            <StyledTextField
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
            <InfoLabel htmlFor="info">Delivery by DHL on {<ClickableDate />}</InfoLabel>
          </Row>
          <Row>
            <Checkbox
              id="agreement"
              checkboxClass="icheckbox_square-blue"
              label="My shipping and billing informations are
        the same and I agree with all needed agreements"
            />
          </Row>
          <Row>
            <Payments />
          </Row>
        </LeftColumn>
        <RightColumn>
          <Bill summ="$440" count="3" noCheckout />
        </RightColumn>
      </ContentContainer>
      <PurchaseButton type="submit"> purchase $212,38</PurchaseButton>
    </Form>
    <Footer />
  </Container>;

import React from 'react';
import styled from 'styled-components';

const OrderWrapper = styled.div`
  background-color: #fff;
  margin: 6px;
  padding: 20px 10px;
`;

const Title = styled.div`
  font-size: 24px;
  color: blue;
  margin-bottom: 10px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Hr = styled.hr`
  width: 100%;
  height: 4px;
  background-color: #f4f4f4;
  border: none;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const TotalTitle = styled.div`
  font-size: 24px;
`;

const PriceContainer = styled.div`
  font-size: 28px;
`;

const Description = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: #d4d4d4;
`;

export default props =>
  <OrderWrapper>
    <Title>Order</Title>
    <DetailContainer>
      <div>{props.count} products</div>
      <div>{props.summ}</div>
    </DetailContainer>
    <DetailContainer>
      <div>Delivery</div>
      <div>$3</div>
    </DetailContainer>
    <Hr />
    <TotalContainer>
      <TotalTitle>Total</TotalTitle>
      <PriceContainer>$212.38</PriceContainer>
    </TotalContainer>
    <Description>Inclusive of tax $2</Description>
  </OrderWrapper>;

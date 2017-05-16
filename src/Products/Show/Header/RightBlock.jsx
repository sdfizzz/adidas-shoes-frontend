import React from 'react';
import styled from 'styled-components';

import Label from '../../../components/Label';

const Container = styled.div`
  flex-direction: column;
  margin-top: 16px;
`;

const SaleWrapper = styled.div`
  visibility: visible;
  display: inline;
  position: relative;
  margin: 0;
  top: 0;
  right: 0;
  margin-left: 37px;
`;

const Price = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
  font-weight: 400;
  margin: 0;
  text-align: right;
`;

const ColorLabel = styled.button`
 border-width: 0;
 border-radius: 50%;
 ${props => `background-color: ${props.bgColor.toString()}`};
 width: 18px;
 height: 18px;
 margin-left: 13px;
 margin-bottom: 20px;
 outline: none;
`;

export default () => (
  <Container>
    <div className="header-right-block-labels">
      <ColorLabel bgColor="#c5c5c5" />
      <ColorLabel bgColor="#4d87ca" />
      <ColorLabel bgColor="#0e0e0e" />
      <ColorLabel bgColor="#e0e0e0" />
      <SaleWrapper>
        <Label>sale</Label>
      </SaleWrapper>
    </div>
    <Price>$170</Price>
  </Container>
);

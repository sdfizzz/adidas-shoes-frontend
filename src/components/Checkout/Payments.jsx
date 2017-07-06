import React from 'react';
import styled from 'styled-components';

import TextField from './TextField';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  margin: 20px 0;
`;

const Row = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-basis: min-content;
`;

const Label = styled.label`
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  padding-right: 5px;
  cursor: pointer;
  ${props => !props.active && 'color: #ddd;'}
`;

export default () =>
  <Container>
    <Row>
      <Label active>pay with card </Label>
      <Label> or cash</Label>
    </Row>
    <Row>
      <TextField id="number" placeholder="0000 0000 0000 0000" label="Card number" />
      <TextField id="expiry" placeholder="MM/YY" label="Expiry" />
      <TextField id="cvv" placeholder="⋅⋅⋅" label="CVV" />
    </Row>
  </Container>;

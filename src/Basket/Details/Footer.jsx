import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  outline: none;
  border: none;
  font-family: AvenirNext-Regular;
  background-color: transparent;
  cursor: pointer;
  color: #0066ff;
  bottom: 0;
`;

export default () => (
  <Container>
    <Button>Add one more</Button>
    <Button>Delete</Button>
  </Container>
);

/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-color: ${props => (props.isSelected ? '#e7e7e7' : '#fff')};
  border-style: solid;
  border-width: 6px;
  transition: all .2s;
  &:hover{
    border-color: #e7e7e7;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
`;

const Img = styled.img`
  max-width: 60px;
  @media only screen and (min-width: 768px){
    max-width: 100%;
  }
`;

export default props => (
  <Container isSelected={props.isSelected}>
    <Button onClick={props.onSelect}>
      <Img src={props.src} />
    </Button>
  </Container>
);

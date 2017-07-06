import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 15px;
  margin-top: 110px;
  @media only screen and (min-width: 768px){
    margin: 0;
    right: 100px;
    top: 30px;
  }
`;

const colors = ['#c5c5c5', '#4d87ca', '#0e0e0e', '#e0e0e0'];

const Button = styled.button`
  border-width: 0;
  border-radius: 50%;
  ${props => `background-color: ${props.color}`};
  width: 18px;
  height: 18px;
  margin-left: 15px;
  margin-bottom: 20px;
  outline: none;
  transition: transform .3s;
  &:hover{
   transform: scale(1.5);
  }
`;

export default props => (
  <Container>
    {colors.map(color => (
      <Button key={color} color={color} onClick={() => props.onChange(color)} />
    ))}
  </Container>
);

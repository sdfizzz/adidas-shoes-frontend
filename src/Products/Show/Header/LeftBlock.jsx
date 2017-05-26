import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: normal;
  margin: 15px 0 0;
  @media only screen and (min-width: 768px){
    font-size: 64px;
    padding-bottom: 15px;
  }
`;

const Button = styled.button`
  display: none;
  @media only screen and (min-width: 768px){
    display: block;
    padding: 30px 20px;
    font-size: 18px;
    border-width: 0;
    border-radius: 50%;
    color: #fff;
    background-color: #e3e3e3;
    font-family: AvenirNext-Bold;
    outline: none;
  }
`;

export default () => (
  <div>
    <Title>ultra boost</Title>
    <Button>SAVE</Button>
  </div>
);

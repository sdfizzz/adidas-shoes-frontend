import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  color: #000;
  padding-right: 30px;
  font-family: AvenirNext-Regular, sans-serif, serif;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 3px solid #eee;
  width: auto;
  &:focus{
    border-color: #9966ff;
    transition: border-color .5s ease-out;
  }
`;

const Label = styled.label`
  color: #ddd;
  font-size: 10px;
  padding-top: 5px;
`;

export default props =>
  <Container>
    <Input type="text" id={props.id} name={props.id} placeholder={props.placeholder} />
    <Label htmlFor={props.id}>{props.label}</Label>
  </Container>;

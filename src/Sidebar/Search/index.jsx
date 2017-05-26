/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
  @media only screen and (min-width: 768px){
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 14px 10px 56px;
    background: #0e0e0e url(${require('./search.svg')}) no-repeat 14px 7px;
    border: none;
    border-bottom: 4px solid #373737;
    color: #fff;
    font-family: AvenirNext-Bold;
    font-size: 24px;
    font-weight: bold;
    outline: 0;
  }
`;

export default () => <Input type="text" name="search" />;

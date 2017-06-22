import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-family: AvenirNext-Reg;
  line-height: 1.52;
  font-size: 20px;
  font-weight: 500;
  color: #d8d8d8;
  @media only screen and (min-width: 768px){
    font-size: 33px;
    font-weight: 800;
  }
`;

export default props => (
  <Wrapper>
    {props.content}
  </Wrapper>
);

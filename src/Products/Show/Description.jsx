import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-family: AvenirNext-Reg;
  font-size: 33px;
  font-weight: 800;
  line-height: 1.52;
  color: #d8d8d8;
`;

const FirstWord = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Wrapper>
    <FirstWord>Adidas </FirstWord>
    is a German multinational corporation, headquartered in Herzogenaurach,
    Germany, that designs and manufactures shoes, clothing and accessories.
  </Wrapper>
);

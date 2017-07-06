import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  outline: none;
  background-image: linear-gradient(to bottom, #4949aa, #27275d);
  cursor: pointer;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export default () =>
  <Container>
    <form action="/basket">
      <Button type="submit">
        <Img src={require('./basket.svg')} alt="Перейти в корзину" />
      </Button>
    </form>
  </Container>;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100px;
  display: flex;
  justify-content: center;
  padding: 5px;
  padding-bottom: 0;
`;

export default props =>
  <Container>
    {props.images.map(img => <img key={img} src={img} alt="" />)}
  </Container>;

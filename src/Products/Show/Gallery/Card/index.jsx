/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-color: ${props => (props.isSelected ? '#e7e7e7' : 'inherit')};
  border-style: ${props => (props.isSelected ? 'solid' : 'none')};
  border-width: ${props => (props.isSelected ? '6px' : '0')};;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
`;

export default props => (
  <Container isSelected={props.isSelected}>
    <Button>
      <img
        src={require('./img.jpg')}
        srcSet={`${require('./img@2x.jpg')} 2x, ${require('./img@3x.jpg')} 3x`}
        alt=""
      />
    </Button>
  </Container>
);

import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  display: inline-block;
  text-align: left;
  margin: 5px 30px;
  @media only screen and (min-width: 768px){
    flex-flow: row nowrap;
    margin: 10px 10px;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: auto;
  margin: 20px;
  @media only screen and (min-width: 768px){
  }
`;

const SizeWrapper = styled(Wrapper)`
  margin-right: 0;
`;

const Size = props => (
  <SizeWrapper>
    {props.sizes.map(size => (
      <Button
        key={size}
        isSelected={props.selected.indexOf(size) !== -1}
        onClick={() => props.handleFilterChanged(size)}
      >
        {size}
      </Button>
    ))}
  </SizeWrapper>
);

export default props => (
  <Container>
    <Size
      sizes={props.sizes}
      selected={props.selected}
      handleFilterChanged={props.handleFilterChanged}
    />
  </Container>
);

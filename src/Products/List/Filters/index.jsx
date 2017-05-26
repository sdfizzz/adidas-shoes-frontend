import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  margin: 5px 30px;
  @media only screen and (min-width: 768px){
    flex-flow: row nowrap;
    margin: 10px 30px;
    height: 55px;
  }
`;

const Wrapper = styled.div`
  width: auto;
  margin: 10px 0;
  @media only screen and (min-width: 768px){
    text-align: center;
    margin-right: 50px;
  }
`;

const Gender = () => (
  <Wrapper>
    <Button isSelected>MAN</Button>
    <Button>WOMAN</Button>
  </Wrapper>
);

const SizeWrapper = styled(Wrapper)`
  margin-right: 0;
`;

const SizeTitle = styled.span`
  vertical-align: middle;
  padding-right: 15px;
  font-size: 24px;
  color: #4d42f8;
`;

const Size = () => (
  <SizeWrapper>
    <SizeTitle className="size-container-title">SIZE</SizeTitle>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isSelected>41</Button>
    <Button>42</Button>
  </SizeWrapper>
);

export default () => (
  <Container>
    <Icon />
    <Gender />
    <Size />
  </Container>
);

import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 11px 30px 11px 25px;
  height: 55px;
  width: 100%;
`;

const Wrapper = styled.div`
  text-align: center;
  width: auto;
  margin: auto 25px auto 30px;
`;

const Gender = () => (
  <Wrapper>
    <Button isSelected>MAN</Button>
    <Button>WOMAN</Button>
  </Wrapper>
);

const SizeTitle = styled.span`
  font-weight: bold;
  vertical-align: middle;
  padding-right: 16px;
  font-size: 24px;
  color: #4d42f8;
`;

const Size = () => (
  <Wrapper>
    <SizeTitle className="size-container-title">SIZE</SizeTitle>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isSelected>41</Button>
    <Button>42</Button>
  </Wrapper>
);

export default () => (
  <Container>
    <Icon />
    <Gender />
    <Size />
  </Container>
);

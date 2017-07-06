import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  border: 6px solid #f4f4f4;
`;

const TopPart = styled.div`
  font-family: GillSans, sans-serif;
`;

const Optional = styled.div`
  margin-top: 10px;
  ${props => props.transparent && 'color: #dedede;'}
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  font-family: AvenirNext-Regular;
  font-weight: bold;
  font-size: 18px;
`;

const Title = styled.div`
`;

const Price = styled.div`
  padding-left: 20px;
`;

const InfoContainer = styled.div`
  float: right;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 170px;
  padding: 0 16px;
`;

const Info = props => (
  <InfoContainer>
    <TopPart>
      <Header>
        <Title>{props.title}</Title>
        <Price>{props.price}</Price>
      </Header>
      <Optional>Size: {props.size}</Optional>
      <Optional transparent>{props.count} item</Optional>
    </TopPart>
    <Footer />
  </InfoContainer>
);

export default props => (
  <Container>
    <Image src={require('./img.png')} alt="" />
    <Info title={props.title} price={props.price} size={props.size} count={props.count} />
  </Container>
);

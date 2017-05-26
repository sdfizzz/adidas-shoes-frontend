/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import SubMenu from './Sub';

const MainNav = styled.nav`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  ${props => props.isOpened && 'position: relative;'};
  margin: 64px auto 0;
  color: #fff;
  text-align: center;
  @media only screen and (min-width: 768px){
    display: block;
    text-align: center;
    margin: 100px auto;
  }
`;

export default props => (
  <MainNav isOpened={props.isOpened}>
    <Menu title="FOOTBALL">
      <SubMenu to="/products/football/shoes">SHOES</SubMenu>
      <SubMenu to="/products/football/clothing">CLOTHING</SubMenu>
      <SubMenu to="/products/football/accesories">ACCESORIES</SubMenu>
    </Menu>
    <Menu title="RUNNING">
      <SubMenu to="/products/running/shoes">SHOES</SubMenu>
      <SubMenu to="/products/running/clothing">CLOTHING</SubMenu>
      <SubMenu to="/products/running/accesories">ACCESORIES</SubMenu>
    </Menu>
    <Menu title="BASKETBALL">
      <SubMenu to="/products/backetball/shoes">SHOES</SubMenu>
      <SubMenu to="/products/backetball/clothing">CLOTHING</SubMenu>
      <SubMenu to="/products/backetball/accesories">ACCESORIES</SubMenu>
    </Menu>
  </MainNav>
);

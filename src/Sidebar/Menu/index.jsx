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
      <SubMenu to="/products/football/cleats">CLEATS</SubMenu>
      <SubMenu to="/products/football/apparel">APPAREL</SubMenu>
      <SubMenu to="/products/football/accessories">ACCESSORIES</SubMenu>
    </Menu>
    <Menu title="RUNNING">
      <SubMenu to="/products/running/shoes">SHOES</SubMenu>
      <SubMenu to="/products/running/apparel">APPAREL</SubMenu>
      <SubMenu to="/products/running/accessories">ACCESSORIES</SubMenu>
    </Menu>
    <Menu title="BASKETBALL">
      <SubMenu to="/products/basketball/shoes">SHOES</SubMenu>
      <SubMenu to="/products/basketball/apparel">APPAREL</SubMenu>
      <SubMenu to="/products/basketball/accessories">ACCESSORIES</SubMenu>
    </Menu>
  </MainNav>
);

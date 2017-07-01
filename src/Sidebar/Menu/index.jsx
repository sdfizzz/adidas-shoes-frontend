import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import SubMenu from './Sub';

const MainNav = styled.nav`
  ${props => props.isOpened && 'position: relative;'};
  display: ${props => (props.isOpened ? 'block' : 'none')};
  margin: 64px auto 0;
  color: #fff;
  text-align: center;
  @media only screen and (min-width: 768px){
    display: block;
    text-align: center;
    margin: 30px auto;
  }
`;

export default props =>
  <MainNav isOpened={props.isOpened}>
    <Menu title="FOOTBALL" src={require('./football-icon.png')}>
      <SubMenu to="/products/football/cleats">Cleats</SubMenu>
      <SubMenu to="/products/football/apparel">Apparel</SubMenu>
      <SubMenu to="/products/football/accessories">Accessories</SubMenu>
    </Menu>
    <Menu title="RUNNING" src={require('./running-icon.png')}>
      <SubMenu to="/products/running/shoes">Shoes</SubMenu>
      <SubMenu to="/products/running/apparel">Apparel</SubMenu>
      <SubMenu to="/products/running/accessories">Accessories</SubMenu>
    </Menu>
    <Menu title="BASKETBALL" src={require('./basketball-icon.png')}>
      <SubMenu to="/products/basketball/shoes">Shoes</SubMenu>
      <SubMenu to="/products/basketball/apparel">Apparel</SubMenu>
      <SubMenu to="/products/basketball/accessories">Accessories</SubMenu>
    </Menu>
  </MainNav>;

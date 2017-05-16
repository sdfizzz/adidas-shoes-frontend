/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import SubCategory from './SubCategory';

const MainNav = styled.nav`
  margin: 148px auto;
  text-align: center;
  display: block;
`;

const SubNav = styled.nav`
  padding-bottom: 50px;
`;

export default () => (
  <MainNav>
    <Category name="SPORTS" to="/" isSelected>
      <SubNav>
        <SubCategory name="SHOES" to="/" isSelected />
        <SubCategory name="CLOTHING" to="/" />
        <SubCategory name="ACCESORIES" to="/" />
      </SubNav>
    </Category>
    <Category name="BRANDS" to="/" />
    <Category name="MICOACH" to="/" />
  </MainNav>
);

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'normalize.css';
import styled from 'styled-components';
import './App.css';
import media from './media';

import Sidebar from './components/Sidebar';
import List from './components/Products/List';
import Show from './components/Products/Show';
import Basket from './components/Basket';
import Checkout from './components/Checkout';

const Container = styled.div`
  font-family: AvenirNext-Bold;
  padding: 0;
  margin: 0;
  ${media.tablet`
    display: flex;
    flex-flow: row nowrap;
    border-spacing: 0;
    border-collapse: collapse;
    height: inherit;
  `}
`;

export default () =>
  <Router>
    <Switch>
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/products/:sport/:category" component={List} />
          <Route path="/basket" component={Basket} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/products/:sport/:category/:id" component={Show} />
          <Redirect to="/products/football/cleats" />
        </Switch>
      </Container>
    </Switch>
  </Router>;

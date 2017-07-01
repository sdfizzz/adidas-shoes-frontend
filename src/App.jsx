import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'normalize.css';
import styled from 'styled-components';
import './App.css';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';
import Basket from './Basket';

const Container = styled.div`
  font-family: AvenirNext-Bold;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 768px){
    display: flex;
    flex-flow: row nowrap;
    border-spacing: 0;
    border-collapse: collapse;
    height: inherit;
  }
`;

export default () =>
  <Router>
    <Switch>
      <Route path="/basket" component={Basket} />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/products/:sport/:category" component={List} />
          <Route path="/products/:sport/:category/:id" component={Show} />
          <Redirect to="/products/football/cleats" />
        </Switch>
      </Container>
    </Switch>
  </Router>;

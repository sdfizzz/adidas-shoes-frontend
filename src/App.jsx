import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'normalize.css';
import styled from 'styled-components';
import './App.css';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

const Container = styled.div`
  font-family: AvenirNext-Bold;
  display: flex;
  flex-flow: row nowrap;
  flex-basis: 100%;
  padding: 0;
  margin: 0;
`;

export default () => (
  <Router>
    <Container>
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/detail" component={Show} />
    </Container>
  </Router>
);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Sidebar from './Sidebar';
import List from './List';
import Show from './Show';

export default () => (
  <Router>
    <div className="app-container">
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/detail" component={Show} />
    </div>
  </Router>
);

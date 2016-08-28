import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainLayout from './components/layouts/MainLayout.jsx';
import Home from './components/pages/Home.jsx';

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>
);


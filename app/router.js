import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainLayout from './components/layouts/MainLayout.jsx';
import Project from './components/pages/Project.jsx';
import Projects from './components/pages/Projects.jsx';

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ Projects } />
      <Route path="/project/:projectId" component={ Project } />
    </Route>
  </Router>
);


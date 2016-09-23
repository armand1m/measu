import { combineReducers } from 'redux';

import tasks from './tasks';
import projects from './projects';
import currentProject from './currentProject';

const reducers = combineReducers({
  tasks, projects, currentProject
});

export default reducers;
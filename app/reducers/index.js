import { combineReducers } from 'redux';

import tasks from './tasks';
import projects from './projects';
import currentProject from './currentProject';
import openedProjects from './openedProjects';

const reducers = combineReducers({
  tasks, projects, currentProject, openedProjects
});

export default reducers;
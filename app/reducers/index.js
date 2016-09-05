import { combineReducers } from 'redux';

import tasks from './task-reducer';
import project from './project-reducer';

const reducers = combineReducers({
  tasks, project
});

export default reducers;
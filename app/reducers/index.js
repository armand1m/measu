import { combineReducers } from 'redux';

import tasks from './task-reducer';

const reducers = combineReducers({
  tasks
});

export default reducers;
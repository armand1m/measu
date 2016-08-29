import * as types from '../actions/action-types';

const initialState = {}

const tasks = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return action.payload.tasks

    case types.TASK_CHANGED:
      var { key, value } = action.payload

      return {
        ...state,
        [key]: value
      }

    case types.REMOVE_TASK_SUCCESS:
      return Object.keys(state)
        .filter(key => key !== action.payload.key)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    
    default:
      return state
  }
}

export default tasks;



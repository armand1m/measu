import * as types from '../actions/types';

const initialState = {}

const tasks = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_TASKS:
      return action.payload.tasks

    case types.ADD_TASK:
    case types.CHANGE_TASK:
      let { key, value } = action.payload

      return {
        ...state,
        [key]: value
      }

    case types.REMOVE_TASK:
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



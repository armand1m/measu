import * as types from '../actions/action-types';
import ProjectService from '../services/project-service';

const initialState = ProjectService.default

const project = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROJECT:
      return action.payload.project

    case types.CHANGE_PROJECT:
      var { key, value } = action.payload

      return {
        ...state,
        [key]: value
      }

    default:
      return state
  }
}

export default project;



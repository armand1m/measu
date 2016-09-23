import * as types from '../actions/types';

const initialState = {}

const projects = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROJECTS:
      return action.payload.projects

    case types.ADD_PROJECT:
    case types.CHANGE_PROJECT:
      let { projectId, key, value } = action.payload

      if (!projectId)
        throw new Error("Please send me the projectId")

      return {
        ...state,
        [projectId]: {
          ...state[projectId],
          [key]: value
        }
      }

    default:
      return state
  }
}

export default projects;
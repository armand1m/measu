import * as types from '../actions/types'

const initialState = {
  key: null
}

const currentProject = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_PROJECT_KEY:
      let { key } = action.payload

      return { key }

    default:
      return state
  }
}

export default currentProject
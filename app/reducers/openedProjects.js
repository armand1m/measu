import * as types from '../actions/types'

const initialState = {
  list: []
}

const openedProjects = function (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_PROJECT:
      var { key } = action.payload

      if (state.list.indexOf(key) >= 0)
        return state

      return {
        list: state.list.concat(key)
      }

    case types.CLOSE_PROJECT:
      var { key } = action.payload
      
      return { 
        ...state,
        list: state.list.filter(projectId => projectId !== key)
      }

    default:
      return state
  }
}

export default openedProjects
import * as types from '../actions/action-types';

let counter = 0

const initialState = []

const tasks = function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK_SUCCESS:
      let task = Object.assign({
        id: counter++,
        done: false
      }, action.payload.task, {
        teste: +action.payload.task.teste,
        analise: +action.payload.task.analise,
        desenvolvimento: +action.payload.task.desenvolvimento,
      })

      return state.concat([ task ])

    case types.TOGGLE_TASK_SUCCESS:
      return state.map(task => {
        if (task.id !== action.payload.task.id) {
          return task
        }

        return {
          ...task,
          done: !task.done
        }
      })

    default:
      return state
  }
}

export default tasks;



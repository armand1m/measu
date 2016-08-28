import * as types from './action-types'

export function addTaskSuccess(task) {
  return { 
    type: types.ADD_TASK_SUCCESS, 
    payload: { task } 
  }
}

export function toggleTaskSuccess(task) {
  return {
    type: types.TOGGLE_TASK_SUCCESS,
    payload: { task }
  }
}

export function removeTaskSuccess(task) {
  return {
    type: types.REMOVE_TASK_SUCCESS,
    payload: { task }
  }
}
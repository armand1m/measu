import * as types from './action-types'


export function getTasksSuccess(tasks) {
  return { 
    type: types.GET_TASKS_SUCCESS, 
    payload: { tasks } 
  }
}

export function addTaskSuccess(task) {
  return { 
    type: types.ADD_TASK_SUCCESS, 
    payload: { task } 
  }
}

export function removeTaskSuccess(key) {
  return {
    type: types.REMOVE_TASK_SUCCESS,
    payload: { key }
  }
}

export function taskChanged(key, value) {
  return {
    type: types.TASK_CHANGED,
    payload: { key, value }
  }
}
import * as types from './action-types'


export function setTasks(tasks) {
  return { 
    type: types.SET_TASKS, 
    payload: { tasks } 
  }
}

export function addTask(key, value) {
  return { 
    type: types.ADD_TASK, 
    payload: { key, value } 
  }
}

export function removeTask(key) {
  return {
    type: types.REMOVE_TASK,
    payload: { key }
  }
}

export function changeTask(key, value) {
  return {
    type: types.CHANGE_TASK,
    payload: { key, value }
  }
}
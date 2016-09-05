import * as types from './action-types'

export function setProject(project) {
  return { 
    type: types.SET_PROJECT, 
    payload: { project } 
  }
}

export function changeProject(key, value) {
  return {
    type: types.CHANGE_PROJECT,
    payload: { key, value }
  }
}
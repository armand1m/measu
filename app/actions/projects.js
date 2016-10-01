import * as types from './types'

export function setProjects(projects) {
  return { 
    type: types.SET_PROJECTS, 
    payload: { projects } 
  }
}

export function setCurrentProjectKey(key) {
  return { 
    type: types.SET_CURRENT_PROJECT_KEY, 
    payload: { key } 
  }
}

export function addProject(key, value) {
  return { 
    type: types.ADD_PROJECT, 
    payload: { key, value } 
  }
}

export function removeProject(key) {
  return {
    type: types.REMOVE_PROJECT,
    payload: { key }
  }
}

export function changeProject(projectId, key, value) {
  return {
    type: types.CHANGE_PROJECT,
    payload: { projectId, key, value }
  }
}

export function openProject(key) {
  return {
    type: types.OPEN_PROJECT,
    payload: { key }
  }
}

export function closeProject(key) {
  return {
    type: types.CLOSE_PROJECT,
    payload: { key }
  }
}
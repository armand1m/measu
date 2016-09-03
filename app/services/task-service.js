import firebase from './firebase-service'

const TASKS_REFERENCE = 'tasks/'
const getTaskKeyReference = (key) => `${TASKS_REFERENCE}${key}`

export function createTask(task) {
  return getTaskReference(createKey())
  .set(Object.assign(
    { done: false }
    , task
    , {
      testing_duration: +task.testing_duration,
      analysis_duration: +task.analysis_duration,
      development_duration: +task.development_duration
    }
  ))
}

export function createKey() {
  return firebase
    .database()
    .ref(TASKS_REFERENCE)
    .push()
    .key
}

export function getTasksReference() {
  return firebase
    .database()
    .ref(TASKS_REFERENCE)
}

export function getTaskReference(key) {
  return firebase
    .database()
    .ref(getTaskKeyReference(key))
}

export function deleteTask(key) {
  return getTaskReference(key).remove()
}

export function toggleTask(key, task) {
  let done = !task.done

  return getTaskReference(key).update({ done })
}

export function getTaskTotalHours(task) {
  return task.analysis_duration 
        + task.testing_duration
        + task.development_duration
}

export function getTaskTotalValue(valuePerHour, task) {
  return getTaskTotalHours(task) * valuePerHour
}
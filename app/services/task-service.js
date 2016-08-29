import firebase from './firebase-service'

const TASKS_REFERENCE = 'tasks/'
const getTaskKeyReference = (key) => `${TASKS_REFERENCE}${key}`

export function createTask(task) {
  var key = 
    firebase
    .database()
    .ref('tasks/')
    .push()
    .key

  return firebase
  .database()
  .ref(getTaskKeyReference(key))
  .set(Object.assign(
    { done: false }
    , task
    , {
      testing_duration: +task.testing_duration,
      analisis_duration: +task.analisis_duration,
      development_duration: +task.development_duration
    }
  ))
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
  return task.analisis_duration 
        + task.testing_duration
        + task.development_duration
}

export function getTaskTotalValue(valuePerHour, task) {
  return getTaskTotalHours(task) * valuePerHour
}
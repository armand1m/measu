import firebase from './firebase-service'

export function createTask(task) {
  var key = 
    firebase
    .database()
    .ref('tasks/')
    .push()
    .key

  return firebase
  .database()
  .ref(`tasks/${key}`)
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
    .ref('tasks/')
}

export function deleteTask(key) {
  return firebase
    .database()
    .ref(`tasks/${key}`)
    .remove()
}

export function toggleTask(key, task) {
  return firebase
    .database()
    .ref(`tasks/${key}`)
    .update({
      done: !task.done
    })
}

export function getTaskTotalHours(task) {
  return task.analisis_duration 
        + task.testing_duration
        + task.development_duration
}

export function getTaskTotalValue(valuePerHour, task) {
  return getTaskTotalHours(task) * valuePerHour
}
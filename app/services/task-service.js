import firebase, { FirebaseModel } from './firebase-service'

class Task extends FirebaseModel {
  get default() {
    return {
      title: '',
      description: '',
      analysis_duration: 0,
      testing_duration: 0,
      development_duration: 0,
      discounted: false
    }
  }

  converter(task) {
    return {
      discounted: !!task.discounted,
      testing_duration: +task.testing_duration,
      analysis_duration: +task.analysis_duration,
      development_duration: +task.development_duration
    }
  }

  constructor() {
    super()
    this.reference = "tasks"
  }
}

const TaskService = new Task()

export function getTaskTotalHours(task) {
  return task.analysis_duration 
        + task.testing_duration
        + task.development_duration
}

export function getTaskTotalValue(valuePerHour, task) {
  if (task.discounted)
    return 0

  return getTaskTotalHours(task) * valuePerHour
}

export default TaskService
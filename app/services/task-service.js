import firebase, { FirebaseModel } from './firebase-service'

function _mapThenSum(array, mapper) {
  const sumReducer = (previous, current) => previous + current

  return array
    .map(mapper)
    .reduce(sumReducer, 0)
}

class Task extends FirebaseModel {
  get default() {
    return {
      title: '',
      description: '',
      analysis_duration: 0,
      testing_duration: 0,
      development_duration: 0,
      discounted: false,
      projectId: null
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
  return (task.discounted) ? 0 : getTaskTotalHours(task) * valuePerHour
}

export function getTotalHours(tasks, discount = false) {
  return _mapThenSum(
    tasks, 
    task => (discount && task.discounted) ? 0 : getTaskTotalHours(task)
  )
}

export function getTotalValue(tasks, valuePerHour) {
  return getTotalHours(tasks, true) * valuePerHour
}

export default TaskService
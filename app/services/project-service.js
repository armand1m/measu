import { FirebaseModel } from './firebase-service'

class Project extends FirebaseModel {
  get default() {
    return {
      name: '',
      description: '',
      valuePerHour: 0
    }
  }

  constructor() {
    super()
    this.reference = "project"
  }
}

const ProjectService = new Project()

export default ProjectService
import { FirebaseModel } from './firebase-service'

class Project extends FirebaseModel {
  constructor() {
    super()
    this.reference = "projects"
  }
}

const ProjectService = new Project()

export default ProjectService
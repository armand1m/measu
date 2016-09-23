import React from 'react';
import { connect } from 'react-redux';
import { setProjects, setCurrentProjectKey } from '../../actions/projects';
import ListItem from '../views/ListItem.jsx';
import Message from '../views/Message.jsx';
import ProjectService from '../../services/project-service';

class ProjectListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createProjectListItem = this.createProjectListItem.bind(this)
    this.onProjectListItemClick = this.onProjectListItemClick.bind(this)
  }

  get projects() {
    return this.props.projects || {}
  }

  componentDidMount() {
    let ref = ProjectService.getReference()

    ref.once('value', snapshot => {
      this.props.dispatch(setProjects(snapshot.val()))
    })
  }

  onProjectListItemClick(key) {
    this.props.dispatch(setCurrentProjectKey(key))
    this.props.history.push('/current');
  }

  createProjectListItem(key) {
    let project = this.projects[key]

    return (
      <ListItem 
        key={ key } 
        active={ this.props.currentProject.key == key }
        onClick={ this.onProjectListItemClick.bind(this, key) }>
        { project.name }
      </ListItem>
    )
  }

  createMessage(message) {
    return (
      <div>
        <ul>
          <Message centered={ true }>
            { message }
          </Message>
        </ul>
      </div>
    )
  }

  render() {
    let projectsKeys = Object.keys(this.projects)

    if (!projectsKeys.length)
      return this.createMessage("Actually, there are no projects for you in here.")

    return (
      <div>
        <ul>
          { projectsKeys.map(this.createProjectListItem) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { projects, currentProject } = state

  return { projects, currentProject }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
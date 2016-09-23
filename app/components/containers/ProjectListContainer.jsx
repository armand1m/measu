import React from 'react';
import { connect } from 'react-redux';
import { setProjects, setCurrentProjectKey } from '../../actions/projects';
import ListItem from '../views/ListItem.jsx';
import ProjectService from '../../services/project-service';

class ProjectListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createProjectListItem = this.createProjectListItem.bind(this)
    this.onProjectListItemClick = this.onProjectListItemClick.bind(this)
  }

  componentDidMount() {
    let ref = ProjectService.getReference()

    ref.once('value', snapshot => {
      this.props.dispatch(setProjects(snapshot.val()))
    })
  }

  onProjectListItemClick(key) {
    this.props.dispatch(setCurrentProjectKey(key))
  }

  createProjectListItem(key) {
    let project = this.props.projects[key]

    return (
      <ListItem 
        key={ key } 
        active={ this.props.currentProject.key == key }
        onClick={ this.onProjectListItemClick.bind(this, key) }>
        { project.name }
      </ListItem>
    )
  }

  render() {
    return (
      <div>
        <ul>
          { Object.keys(this.props.projects || {}).map(this.createProjectListItem) }
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
import React from 'react';
import { connect } from 'react-redux';
import { setProjects, setCurrentProjectKey, openProject } from '../../actions/projects';
import ListItem from '../views/ListItem.jsx';
import MessageBox from '../views/MessageBox.jsx';
import ProjectService from '../../services/project-service';
import LoadingBox from '../views/LoadingBox.jsx'

class ProjectListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    this.createProjectListItem = this.createProjectListItem.bind(this)
    this.onProjectListItemClick = this.onProjectListItemClick.bind(this)
  }

  get projects() {
    return this.props.projects || {}
  }

  componentDidMount() {
    let ref = ProjectService.getReference()

    ref.once('value', snapshot => {
      this.setState({ loading: false })
      this.props.dispatch(setProjects(snapshot.val()))
    })
  }

  onProjectListItemClick(key) {
    this.props.dispatch(openProject(key))
    this.props.history.push(`/project/${key}`);
  }

  createProjectListItem(key) {
    let project = this.projects[key]

    return (
      <ListItem 
        key={ key }
        onClick={ this.onProjectListItemClick.bind(this, key) }>
        { project.name }
      </ListItem>
    )
  }

  render() {
    let projectsKeys = Object.keys(this.projects)

    if (this.state.loading)
      return (<LoadingBox fullHeight={ true } />)

    if (!(projectsKeys.length || this.state.loading))
      return (
        <MessageBox>
          Actually, there are no projects for you in here.
        </MessageBox>
      )

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
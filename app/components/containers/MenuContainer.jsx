import React from 'react';
import { Link } from 'react-router';
import { setProjects, setCurrentProjectKey, openProject, closeProject } from '../../actions/projects';
import { connect } from 'react-redux';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createProjectTab = this.createProjectTab.bind(this)
  }

  get currentProjectId() {
    return this.props.currentProject.key
  }

  get currentProject() {
    return this.props.projects[this.currentProjectId]
  }

  createProjectTab(projectId) {
    let tabUrl = `/project/${projectId}`

    let clazzName = 
      this.isActive(tabUrl) ? "is-active" : ""

    return (
      <li 
        key={ projectId } 
        className={ clazzName } >
        <Link to={ tabUrl }>
          { this.props.projects[projectId].name }
        </Link>
      </li> 
    )
  }
  
  isActive(path) {
    return this.props.currentPath == path
  }

  render() {
    let clazzName = 
      this.isActive("/") ? "is-active" : ""

    return (
      <div className="tabs is-medium">
        <ul style={{ marginLeft: "0", marginRight: "0" }}>
          <li className={ clazzName } style={ { marginTop: ".25em" } }>
            <Link to="/">
              Projects
            </Link>
          </li>
          { this.props.openedProjects.list.map(this.createProjectTab) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { currentProject, openedProjects, projects } = state

  return { currentProject, openedProjects, projects }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
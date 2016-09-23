import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class MenuContainer extends React.Component {
  get currentProjectId() {
    return this.props.currentProject.key
  }

  get currentProject() {
    return this.props.projects[this.currentProjectId]
  }

  get currentProjectTab() {
    let path = "/current"
    let clazz = 
      this.isActive(path) ? "is-active" : ""

    return (
      <li className={ clazz }>
        <Link to={ path }>
          { this.currentProject.name }
        </Link>
      </li>
    )
  }

  isActive(path) {
    return this.props.currentPath == path
  }

  render() {
    let clazz = 
      this.isActive("/") ? "is-active" : ""

    return (
      <div className="tabs">
        <ul>
          <li className={ clazz } style={ { marginTop: ".25em" } }>
            <Link to="/">
              Projects
            </Link>
          </li>
          {
            (this.currentProjectId)
            ? this.currentProjectTab
            : null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { currentProject, projects } = state

  return { currentProject, projects }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
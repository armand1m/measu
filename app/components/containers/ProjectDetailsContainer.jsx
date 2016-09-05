import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import ProjectDetails from '../views/ProjectDetails.jsx';
import { getTaskTotalHours } from '../../services/task-service';
import { setProject, changeProject } from '../../actions/project-actions';
import ProjectService from '../../services/project-service';

class ProjectDetailsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getTotalHours = this.getTotalHours.bind(this)
    this.getTotalValue = this.getTotalValue.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
  }

  componentDidMount() {
    var projectRef = ProjectService.getReference()

    projectRef.once('value', snapshot => {
      this.props.dispatch(setProject(snapshot.val()))
    })

    projectRef.on('child_changed', snapshot => {
      this.props.dispatch(changeProject(snapshot.key, snapshot.val()))
    })
  }
  
  getTotalHours() {
    return Object.keys(this.props.tasks || {})
      .map(key => getTaskTotalHours(this.props.tasks[key]))
      .reduce((previous, current) => previous + current, 0)
  }

  getTotalValue() {
    return this.getTotalHours() * config.valuePerHour
  }

  onFieldChange(key, e) {
    var data = {
      [key]: e.target.value
    }

    ProjectService.update(null, data)
  }

  render() {
    return (
      <ProjectDetails 
        valueUnit={ config.valueUnit }
        getTotalHours={ this.getTotalHours }
        getTotalValue={ this.getTotalValue }
        onFieldChange={ this.onFieldChange }
        project={ this.props.project }
        tasks={ this.props.tasks } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks, project } = state

  return { tasks, project }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);
import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import ProjectDetails from '../views/ProjectDetails.jsx';
import { getTaskTotalHours, getTaskTotalValue } from '../../services/task-service';

class ProjectDetailsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getTotalHours = this.getTotalHours.bind(this)
    this.getTotalValue = this.getTotalValue.bind(this)
  }
  
  getTotalHours() {
    return Object.keys(this.props.tasks || {})
      .map(key => getTaskTotalHours(this.props.tasks[key]))
      .reduce((previous, current) => previous + current, 0)
  }

  getTotalValue() {
    return this.getTotalHours() * config.valuePerHour
  }

  render() {
    return (
      <ProjectDetails 
        valuePerHour={ config.valuePerHour }
        getTotalHours={ this.getTotalHours }
        getTotalValue={ this.getTotalValue }
        tasks={ this.props.tasks } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks } = state

  return { tasks }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);
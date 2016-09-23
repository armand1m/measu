import React from 'react';
import TaskForm from '../views/TaskForm.jsx';
import TaskService from '../../services/task-service';
import { connect } from 'react-redux';

class TaskFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onSubmit(data) {
    data.projectId = this.props.currentProject.key

    TaskService.create(data)
  }

  render() {
    return (
      <TaskForm ref={component => this._taskForm = component } onSubmit={ this.onSubmit } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { currentProject } = state

  return { currentProject }
}

export default connect(mapStateToProps)(TaskFormContainer);

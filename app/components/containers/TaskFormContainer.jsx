import React from 'react';
import TaskForm from '../views/TaskForm.jsx';
import TaskService from '../../services/task-service';

class TaskFormContainer extends React.Component {
  onSubmit(data) {
    TaskService.create(data)
  }

  render() {
    return (
      <TaskForm ref={component => this._taskForm = component } onSubmit={ this.onSubmit } />
    )
  }
}

export default TaskFormContainer;
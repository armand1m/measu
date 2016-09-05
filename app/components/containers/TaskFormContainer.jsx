import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../views/TaskForm.jsx';
import { createTask } from '../../services/task-service';

class TaskFormContainer extends React.Component {
  render() {
    return (
      <TaskForm ref={component => this._taskForm = component } onSubmit={ createTask } />
    )
  }
}

export default TaskFormContainer;
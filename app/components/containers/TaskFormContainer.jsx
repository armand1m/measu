import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../views/TaskForm.jsx';
import { createTask } from '../../services/task-service';
import { addTaskSuccess } from '../../actions/task-actions';

class TaskFormContainer extends React.Component {
  render() {
    return (
      <TaskForm onSubmit={ createTask } />
    )
  }
}

export default connect()(TaskFormContainer);
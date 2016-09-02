import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../views/TaskForm.jsx';
import { createTask } from '../../services/task-service';
import { addTaskSuccess } from '../../actions/task-actions';

class TaskFormContainer extends React.Component {
  constructor(props) {
    super(props)

    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onKeyDown(e) {
    console.log(e)
  }

  render() {
    return (
      <TaskForm 
        onKeyDown={ this.onKeyDown }
        onSubmit={ createTask } />
    )
  }
}

export default connect()(TaskFormContainer);
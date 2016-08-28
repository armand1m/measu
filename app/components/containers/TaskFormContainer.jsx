import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../views/TaskForm.jsx';
import { addTaskSuccess } from '../../actions/task-actions';

class TaskFormContainer extends React.Component {
  render() {
    return (
      <TaskForm onSubmit={ this.props.onSubmit } />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (task) => {
      dispatch(addTaskSuccess(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskFormContainer);
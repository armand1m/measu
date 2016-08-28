import React from 'react';
import { connect } from 'react-redux';
import Task from '../views/Task.jsx';
import { toggleTaskSuccess, removeTaskSuccess } from '../../actions/task-actions';

class TaskContainer extends React.Component {
  render() {
    return (
      <Task 
        task={ this.props.task } 
        onChange={ this.props.onChange }
        onRemove={ this.props.onRemove } />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (task) => {
      dispatch(toggleTaskSuccess(task))
    },
    onRemove: (task) => {
      dispatch(removeTaskSuccess(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskContainer);
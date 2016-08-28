import React from 'react';
import { connect } from 'react-redux';
import Task from '../views/Task.jsx';
import { toggleTaskSuccess } from '../../actions/task-actions';

class TaskContainer extends React.Component {
  render() {
    return (
      <Task 
        task={ this.props.task } 
        onChange={ this.props.onChange } />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (task) => {
      dispatch(toggleTaskSuccess(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskContainer);
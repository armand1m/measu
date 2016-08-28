import React from 'react';
import { connect } from 'react-redux';
import Task from '../views/Task.jsx';
import { deleteTask, toggleTask } from '../../services/task-service';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  onChange() {
    toggleTask(this.props.taskKey, this.props.task)
  }

  onRemove() {
    deleteTask(this.props.taskKey)
  }

  render() {
    return (
      <Task 
        task={ this.props.task } 
        onChange={ this.onChange }
        onRemove={ this.onRemove } />
    )
  }
}

export default connect()(TaskContainer);
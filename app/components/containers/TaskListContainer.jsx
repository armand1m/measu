import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
import TaskList from '../views/TaskList.jsx';

class TaskListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createTaskContainer = this.createTaskContainer.bind(this)
  }

  createTaskContainer(task) {
    return (
      <TaskContainer key={ task.id } task={ task } /> 
    )
  }

  render() {
    return (
      <div>
        <TaskList>
          { this.props.tasks.map(this.createTaskContainer) }
        </TaskList>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks } = state

  return { tasks }
};

export default connect(mapStateToProps)(TaskListContainer);
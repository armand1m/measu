import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
import TaskList from '../views/TaskList.jsx';
import { getTasksSuccess, removeTaskSuccess, taskChanged } from '../../actions/task-actions';
import { getTasksReference } from '../../services/task-service';

class TaskListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createTaskContainer = this.createTaskContainer.bind(this)
  }

  componentDidMount() {
    var tasksRef = getTasksReference()

    tasksRef.on('value', snapshot => {
      this.props.dispatch(getTasksSuccess(snapshot.val()))
    })

    tasksRef.on('child_removed', snapshot => {
      this.props.dispatch(removeTaskSuccess(snapshot.key))
    })

    tasksRef.on('child_changed', snapshot => {
      this.props.dispatch(taskChanged(snapshot.key, snapshot.val()))
    })
  }

  createTaskContainer(key) {
    return (
      <TaskContainer 
        key={ key } 
        taskKey={ key }
        task={ this.props.tasks[key] } /> 
    )
  }

  render() {
    return (
      <div>
        <TaskList>
          { Object.keys(this.props.tasks || {}).map(this.createTaskContainer) }
        </TaskList>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks } = state

  return { tasks }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
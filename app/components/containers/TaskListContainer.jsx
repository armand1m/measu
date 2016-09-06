import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
import TaskList from '../views/TaskList.jsx';
import { setTasks, removeTask, addTask, changeTask } from '../../actions/task-actions';
import TaskService from '../../services/task-service';

class TaskListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.createTaskContainer = this.createTaskContainer.bind(this)
  }

  componentDidMount() {
    var tasksRef = TaskService.getReference()

    tasksRef.on('child_added', snapshot => {
      this.props.dispatch(addTask(snapshot.key, snapshot.val()))
    })

    tasksRef.on('child_removed', snapshot => {
      this.props.dispatch(removeTask(snapshot.key))
    })

    tasksRef.on('child_changed', snapshot => {
      this.props.dispatch(changeTask(snapshot.key, snapshot.val()))
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
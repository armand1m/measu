import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
import Message from '../views/Message.jsx';
import { setTasks, removeTask, addTask, changeTask } from '../../actions/task';
import TaskService from '../../services/task-service';

class TaskListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.createTaskContainer = this.createTaskContainer.bind(this)
  }

  componentDidMount() {
    var ref = TaskService.getReference()

    ref.on('child_added', snapshot => {
      this.props.dispatch(addTask(snapshot.key, snapshot.val()))
    })

    ref.on('child_removed', snapshot => {
      this.props.dispatch(removeTask(snapshot.key))
    })

    ref.on('child_changed', snapshot => {
      this.props.dispatch(changeTask(snapshot.key, snapshot.val()))
    })
  }

  get tasks() {
    return this.props.tasks || {}
  }

  get tasksKeys() {
    return Object.keys(this.tasks)
  }

  get currentProjectTasks() {
    return this
      .tasksKeys
      .map(key => this.tasks[key])
      .filter(task => task.projectId === this.currentProjectId)
  }

  get currentProjectId() {
    return this.props.projectId
  }

  createTaskContainer(key) {
    let task = this.props.tasks[key]

    if (task.projectId != this.currentProjectId)
      return

    return (
      <TaskContainer 
        key={ key } 
        taskKey={ key }
        task={ this.props.tasks[key] } /> 
    )
  }

  createMessage(message) {
    return (
      <div>
        <ul>
          <Message centered={ true }>
            { message }
          </Message>
        </ul>
      </div>
    )
  }

  render() {
    if (!this.currentProjectId)
      return this.createMessage("No current project. You should open one, it will be cool.")

    let tasksKeys = Object.keys(this.tasks)

    if (!this.currentProjectTasks.length)
      return this.createMessage("No tasks in the current project.")

    return (
      <div>
        <ul>
          { tasksKeys.map(this.createTaskContainer) }
        </ul>
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
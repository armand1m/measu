import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
import MessageBox from '../views/MessageBox.jsx';
import { setTasks, removeTask, addTask, changeTask } from '../../actions/task';
import TaskService from '../../services/task-service';
import LoadingBox from '../views/LoadingBox.jsx'

class TaskListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.createTaskContainer = this.createTaskContainer.bind(this)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    var ref = TaskService.getReference()

    ref.once('value', snapshot => {
      this.setState({ loading: false })
    })

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

  render() {
    if (!this.currentProjectId)
      return (
        <MessageBox>
          No current project. You should open one, it will be cool.
        </MessageBox>
      )


    if (this.state.loading)
      return (<LoadingBox />)

    if (!(this.currentProjectTasks.length || this.state.loading))
      return (
        <MessageBox>
          No tasks in the current project.
        </MessageBox>
      )

    return (
      <div>
        <ul>
          { this.tasksKeys.map(this.createTaskContainer) }
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
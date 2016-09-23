import React from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer.jsx';
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

  get currentProjectId() {
    return this.props.currentProject.key
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
      return (<p className="subtitle">Nenhum projeto aberto.</p>)

    return (
      <div>
        <ul>
          { Object.keys(this.tasks).map(this.createTaskContainer) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks, currentProject } = state

  return { tasks, currentProject }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
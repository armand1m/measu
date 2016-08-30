import React from 'react';
import { connect } from 'react-redux';
import Task from '../views/Task.jsx';
import AssertDeleteDialog from '../views/AssertDeleteDialog.jsx';
import { deleteTask, toggleTask } from '../../services/task-service';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dialog: {
        active: false
      }
    }

    this.onChange = this.onChange.bind(this)
    this.showAssertDeleteDialog = this.showAssertDeleteDialog.bind(this)
    this.hideAssertDeleteDialog = this.hideAssertDeleteDialog.bind(this)
    this.onDeleteDialogCancel = this.onDeleteDialogCancel.bind(this)
    this.onDeleteDialogSuccess = this.onDeleteDialogSuccess.bind(this)
  }

  onChange() {
    toggleTask(this.props.taskKey, this.props.task)
  }

  onDeleteDialogCancel() {
    this.hideAssertDeleteDialog()
  }

  onDeleteDialogSuccess() {
    deleteTask(this.props.taskKey)
  }

  showAssertDeleteDialog() {
    this.setState({ dialog: { active: true } })
  }

  hideAssertDeleteDialog() {
    this.setState({ dialog: { active: false } })
  }
  
  render() {
    return (
      <div className="box">
        <Task 
          task={ this.props.task } 
          onChange={ this.onChange }
          onRemove={ this.showAssertDeleteDialog } />

        <AssertDeleteDialog
          active={ this.state.dialog.active }
          cancel={ this.onDeleteDialogCancel }
          delete={ this.onDeleteDialogSuccess } />
      </div>
    )
  }
}

export default connect()(TaskContainer);
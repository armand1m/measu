import React from 'react';
import ReactDOM from 'react-dom';

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
      },
      description: {
        isOpen: false
      }
    }

    this.onChange = this.onChange.bind(this)
    this.showAssertDeleteDialog = this.showAssertDeleteDialog.bind(this)
    this.hideAssertDeleteDialog = this.hideAssertDeleteDialog.bind(this)
    this.onDeleteDialogCancel = this.onDeleteDialogCancel.bind(this)
    this.onDeleteDialogSuccess = this.onDeleteDialogSuccess.bind(this)
    this.toggleDescription = this.toggleDescription.bind(this)
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
    ReactDOM.findDOMNode(this._assertDeleteDialog).focus()
  }

  hideAssertDeleteDialog() {
    this.setState({ dialog: { active: false } })
  }

  toggleDescription() {
    let state = this.state

    this.setState({ 
      ...state,
      description: {
        isOpen: !this.state.description.isOpen
      }
    })
  }
  
  render() {
    return (
      <div className="box">
        <Task 
          task={ this.props.task } 
          open={ this.state.description.isOpen }
          onClick={ this.toggleDescription }
          onChange={ this.onChange }
          onRemove={ this.showAssertDeleteDialog } />

        <AssertDeleteDialog
          ref={component => this._assertDeleteDialog = component}
          active={ this.state.dialog.active }
          cancel={ this.onDeleteDialogCancel }
          delete={ this.onDeleteDialogSuccess } />
      </div>
    )
  }
}

export default connect()(TaskContainer);
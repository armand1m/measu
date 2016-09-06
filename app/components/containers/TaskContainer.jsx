import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../views/Task.jsx';
import AssertDeleteDialog from '../views/AssertDeleteDialog.jsx';
import TaskService from '../../services/task-service';

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

    this.onFieldChange = this.onFieldChange.bind(this)
    this.showAssertDeleteDialog = this.showAssertDeleteDialog.bind(this)
    this.hideAssertDeleteDialog = this.hideAssertDeleteDialog.bind(this)
    this.onDeleteDialogCancel = this.onDeleteDialogCancel.bind(this)
    this.onDeleteDialogSuccess = this.onDeleteDialogSuccess.bind(this)
    this.toggleDescription = this.toggleDescription.bind(this)
  }

  onFieldChange(key, e) {
    var data = {}

    switch(key) {
      case "discounted":
        data[key] = e.target.checked
        break;

      default:
        data[key] = e.target.value
    }

    TaskService.update(this.props.taskKey, data)
  }

  onDeleteDialogCancel() {
    this.hideAssertDeleteDialog()
  }

  onDeleteDialogSuccess() {
    TaskService.delete(this.props.taskKey)
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
          onFieldChange={ this.onFieldChange }
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

export default TaskContainer;
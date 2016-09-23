import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../views/Task.jsx';
import AssertDeleteDialog from '../views/AssertDeleteDialog.jsx';
import TaskService from '../../services/task-service';

function _isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

class TaskContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dialog: {
        active: false
      },
      editMode: {
        active: false
      },
      description: {
        open: false
      }
    }

    this.onFieldChange = this.onFieldChange.bind(this)
    this.showAssertDeleteDialog = this.showAssertDeleteDialog.bind(this)
    this.hideAssertDeleteDialog = this.hideAssertDeleteDialog.bind(this)
    this.onDeleteDialogCancel = this.onDeleteDialogCancel.bind(this)
    this.onDeleteDialogSuccess = this.onDeleteDialogSuccess.bind(this)
    this.toggleDescription = this.toggleDescription.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  onFieldChange(key, e) {
    var data = {}
    
    switch(key) {
      case "discounted":
        data[key] = e.target.checked
        break;

      default:
        let { value } = e.target

        data[key] = (!_isNumber(value) && e.target instanceof HTMLTextAreaElement) ? value : Number(value)
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
    this.setState({
      description: {
        open: !this.state.description.open
      }
    })
  }

  toggleEditMode() {
    this.setState({
      editMode: {
        active: !this.state.editMode.active
      }
    })
  }

  render() {
    return (
      <div className="box">
        <Task 
          task={ this.props.task }
          open={ this.state.description.open }
          isEditMode={ this.state.editMode.active }
          toggleEditMode={ this.toggleEditMode }
          toggleDescription={ this.toggleDescription }
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

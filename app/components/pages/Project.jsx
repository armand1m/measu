import React from 'react';
import ReactDOM from 'react-dom';
import { HotKeys } from 'react-hotkeys';
import TaskListContainer from '../containers/TaskListContainer.jsx';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';

const keyMap = {
  'FocusTaskTitleInput': 'ctrl+n'
}

export default class Project extends React.Component {
  constructor(props) {
    super(props)

    this.onFocusTaskTitleInput = this.onFocusTaskTitleInput.bind(this)
  }

  onFocusTaskTitleInput() {
    let input = this._taskFormContainer._taskForm._taskTitleInput

    ReactDOM.findDOMNode(input).focus()
  }

  get projectId() {
    return this.props.params.projectId
  }

  render() {
    const handlers = {
      'FocusTaskTitleInput': this.onFocusTaskTitleInput
    }

    return (
      <HotKeys
        className="container is-fluid"
        style={ { outline: "none" } }
        keyMap={ keyMap }
        handlers={ handlers }>
        <div>
          <div className="content columns">
            <div className="column is-8">
              <TaskListContainer projectId={ this.projectId } />
            </div>

            <div className="column is-4">
              <ul>
                <div className="box">
                  <ProjectDetailsContainer projectId={ this.projectId } />
                </div>

                <div className="box">
                  <TaskFormContainer 
                    ref={component => this._taskFormContainer = component} 
                    projectId={ this.projectId } />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </HotKeys>
    );
  }
}
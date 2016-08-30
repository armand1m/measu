import React from 'react';
import TaskListContainer from '../containers/TaskListContainer.jsx';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 className="title is-1">measu.</h1>
        <p className="subtitle is-3">
          a project measurement tool by <a href="http://fluxor.org" target="_blank">Fluxor</a>.
        </p>
        <hr />

        <div className="columns">
          <div className="column is-two-thirds">
            <TaskListContainer />
          </div>

          <div className="column">
            <ul> 
              <div className="box">
                <ProjectDetailsContainer />
              </div>

              <div className="box">
                <TaskFormContainer />
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

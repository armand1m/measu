import React from 'react';
import TaskListContainer from '../containers/TaskListContainer.jsx';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';

const imageStyle = {
  width: "5rem",
  borderRadius: "50%",
  margin: "1rem"
}

const titleStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center"
}

export default class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content has-text-centered">
          <div className="title is-1" style={ titleStyle }>
            <img src="images/photo.gif" style={ imageStyle }/>
            measu.
          </div>
          <p className="subtitle is-3">
            a project measurement tool by <a href="http://fluxor.org" target="_blank">Fluxor</a>.
          </p>
        </div>

        <hr className="is-marginless" />

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

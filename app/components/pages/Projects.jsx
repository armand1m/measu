import React from 'react';
import ProjectListContainer from '../containers/ProjectListContainer.jsx';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="content columns">
          <div className="column is-12">
            <ProjectListContainer />
          </div>
        </div>
      </div>
    )
  }
}

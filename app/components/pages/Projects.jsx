import React from 'react';
import ProjectListContainer from '../containers/ProjectListContainer.jsx';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="content columns"  style={{ marginLeft: "0", marginRight: "0" }}>
        <div className="column is-12">
          <ProjectListContainer history={ this.props.history } />
        </div>
      </div>
    )
  }
}

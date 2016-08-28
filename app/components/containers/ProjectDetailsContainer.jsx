import React from 'react';
import { connect } from 'react-redux';
import ProjectDetails from '../views/ProjectDetails.jsx';

class ProjectDetailsContainer extends React.Component {
  render() {
    return (
      <ProjectDetails 
        valuePerHour={ 45 }
        tasks={ this.props.tasks } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks } = state

  return { tasks }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);
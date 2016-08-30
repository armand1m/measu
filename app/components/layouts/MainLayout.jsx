import React from 'react';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebar: {
        pinned: false
      }
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState({ 
      sidebar: { pinned: !this.state.sidebar.pinned }
    })
  }

  render() {
    return (
      <div>
        <div style={{ border: "1px solid #000" }}>
          <div style={{ border: "1px solid #000" }}>
            <button onClick={ this.toggleSidebar }>Toggle sidebar</button>
          </div>

          <div>
            { this.props.children }
          </div>
        </div>

        <div style={{ 
          border: "1px solid #000",
          display: (this.state.sidebar.pinned) ? "initial" : "none"
        }}>
          <div>
            <ProjectDetailsContainer />
            <TaskFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

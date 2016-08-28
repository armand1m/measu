import React from 'react';
import { Layout, Panel, Sidebar, AppBar, IconButton } from 'react-toolbox';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';
import MainLayoutPanelTheme from '../../theme/MainLayoutPanel.scss';

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
      <Layout>
        <Panel theme={ MainLayoutPanelTheme } >
          <AppBar fixed={ true }>
            <IconButton icon='subject' inverse={ true } onClick={ this.toggleSidebar } />
          </AppBar>

          <div className={ MainLayoutPanelTheme["panel__body"] }>
            { this.props.children }
          </div>
        </Panel>

        <Sidebar
          width={ 6 }
          scrollY={ true }
          pinned={ this.state.sidebar.pinned } >
          <div style={
            { 
              marginTop: "6.4rem",
              overflowY: "scroll",
              "WebkitOverflowScrolling": "touch"
            }
          }>
            <ProjectDetailsContainer />
            <TaskFormContainer />
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

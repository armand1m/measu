import React from 'react';
import { Layout, Panel, Sidebar } from 'react-toolbox';
import TaskFormContainer from '../containers/TaskFormContainer.jsx';
import ProjectDetailsContainer from '../containers/ProjectDetailsContainer.jsx';
import MainLayoutPanelTheme from '../../theme/MainLayoutPanel.scss';
import MainLayoutSidebarTheme from '../../theme/MainLayoutSidebar.scss';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Panel theme={ MainLayoutPanelTheme } >
          <div className={ MainLayoutPanelTheme["panel__body"] }>
            { this.props.children }
          </div>
        </Panel>

        <Sidebar theme={ MainLayoutSidebarTheme } pinned={ true } width={ 6 }>
          <ProjectDetailsContainer />
          <TaskFormContainer />
        </Sidebar>
      </Layout>
    );
  }
}

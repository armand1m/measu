import React from 'react';
import { ListDivider } from 'react-toolbox';
import TaskListContainer from '../containers/TaskListContainer.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>measu.</h1>
        <ListDivider />
        <TaskListContainer />
      </div>
    );
  }
}

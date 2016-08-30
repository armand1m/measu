import React from 'react';
import TaskListContainer from '../containers/TaskListContainer.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>measu.</h1>
        <hr />
        <TaskListContainer />
      </div>
    );
  }
}

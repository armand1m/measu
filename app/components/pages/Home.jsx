import React from 'react';
import TaskListContainer from '../containers/TaskListContainer.jsx';

const style = {
  width: "60%"
}

export default class Home extends React.Component {
  render() {
    return (
      <div style={ style }>
        <h1>measu.</h1>
        <TaskListContainer />
      </div>
    );
  }
}

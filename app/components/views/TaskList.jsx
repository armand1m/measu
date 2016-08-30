import React from 'react';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.props.children }
      </ul>
    )
  }
}
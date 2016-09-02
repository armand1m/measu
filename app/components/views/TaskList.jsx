import React from 'react';

export default class TaskList extends React.Component {
  render() {
    return (<ul>{ this.props.children }</ul>)
  }
}
import React from 'react';
import { List } from 'react-toolbox';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        { this.props.children }
      </List>
    )
  }
}
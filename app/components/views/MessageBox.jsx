import React from 'react'
import Message from './Message.jsx';

export default class MessageBox extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Message centered={ true }>
            { this.props.children }
          </Message>
        </ul>
      </div>
    )
  }
}
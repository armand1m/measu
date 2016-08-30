import React from 'react';

export default class AssertDeleteDialog extends React.Component {
  render() {
    return (
      <div style={{ 
        position: "fixed", 
        top: "50%", 
        background: "white", 
        display: (this.props.active) ? "initial" : "none" 
      }}>
        <p>Are you sure you want to <b>delete</b> this record? </p>
        <button onClick={ this.props.cancel }>Hell no!</button>
        <button onClick={ this.props.delete }>Just do it</button>
      </div>
    )
  }
}
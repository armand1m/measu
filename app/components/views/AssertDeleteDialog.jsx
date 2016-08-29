import React from 'react';
import { Dialog } from 'react-toolbox';

export default class AssertDeleteDialog extends React.Component {
  get actions() {
    return [
      { label: "Hell no!", onClick: this.props.cancel },
      { label: "Just do it.", onClick: this.props.delete }
    ]
  }

  render() {
    return (
      <Dialog
        type='small'
        actions={ this.actions }
        active={ this.props.active }
        onEscKeyDown={ this.props.cancel }
        onOverlayClick={ this.props.cancel }
        title='Are you sure?'>
        <p>Are you sure you want to <b>delete</b> this record? </p>
      </Dialog>
    )
  }
}
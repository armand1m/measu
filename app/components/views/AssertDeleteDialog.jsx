import React from 'react';
import { HotKeys } from 'react-hotkeys';

const keyMap = {
  'cancel': 'esc',
  'commit': 'enter'
}

export default class AssertDeleteDialog extends React.Component {
  render() {
    let modalClassName = "modal " + ((this.props.active) ? "is-active" : "")

    const handlers = {
      'cancel': this.props.cancel,
      'commit': this.props.delete
    }

    return (
      <HotKeys
        style={ { outline: "none" } }
        keyMap={ keyMap }
        handlers={ handlers }>
        <div className={ modalClassName }>
          <div
            className="modal-background"
            onClick={ this.props.cancel }>
          </div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title is-marginless">Hoop!</p>
            </header>

            <section className="modal-card-body">
              <p>Are you sure you want to <b>delete</b> this record? </p>
            </section>

            <footer className="modal-card-foot">
              <a
                className="button is-danger is-outlined"
                onClick={ this.props.delete }>
                Go for it.
              </a>
              <a
                className="button is-link"
                onClick={ this.props.cancel }>
                Hell no!
              </a>
            </footer>
          </div>
          <button
            className="modal-close"
            onClick={ this.props.cancel }>
          </button>
        </div>
      </HotKeys>
    )
  }
}

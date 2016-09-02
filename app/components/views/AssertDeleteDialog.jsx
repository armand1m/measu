import React from 'react';

export default class AssertDeleteDialog extends React.Component {
  render() {
    let modalClassName = "modal " + ((this.props.active) ? "is-active" : "")

    return (
      <div className={ modalClassName }>
        <div className="modal-background" onClick={ this.props.cancel }></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-marginless">Hoop!</p>
            <button className="delete" onClick={ this.props.cancel }></button>
          </header>
          
          <section className="modal-card-body">
            <p>Are you sure you want to <b>delete</b> this record? </p>
          </section>

          <footer className="modal-card-foot">
            <a className="button is-danger is-outlined" onClick={ this.props.delete }>Go for it.</a>
            <a className="button is-link" onClick={ this.props.cancel }>Hell no!</a>
          </footer>
        </div>
      </div>
    )
  }
}
import React from 'react'

export default class ListItem extends React.Component {
  render() {
    let contentClassName = "list-item__content"
    contentClassName += " title is-3 is-marginless non-styled-button"

    if (this.props.active) {
      contentClassName += " list-item__content--active"
    }


    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="list-item__header">
              <button
                className={ contentClassName }
                onClick={ this.props.onClick }
                style={ { textAlign: 'left', width: '100%' } }>
                { this.props.children }
              </button>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
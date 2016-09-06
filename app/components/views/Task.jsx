import React from 'react'

const util = {
  isHidden: {
    display: "none"
  },
  isDanger: {
    color: "#ed6c63"
  },
  isSafe: {
    color: "#97cd76"
  }
}

export default class Task extends React.Component {
  constructor(props) {
    super(props)

    this.onRemove = this.props.onRemove.bind(this, this.props.task)
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    var headerStyle = this.props.task.discounted ? util.isDanger : null

    return (
      <article className="media">
        <div className="media-content">
          <button 
            className="title is-3 is-marginless non-styled-button" 
            style={ headerStyle } 
            onClick={ this.onClick }>
            { this.props.task.title }
          </button>

          <div className="content" style={ this.props.open ? {} : util.isHidden }>
            <hr style={ { margin: "1em 0", borderColor: "#eee" } } />

            <p>
              <strong>Description: </strong>
              { this.props.task.description }
            </p>

            <label className="label">Discounted?</label>
            <p className="control">
              <input 
                onChange={ this.props.onFieldChange.bind(this, 'discounted') }
                checked={ this.props.task.discounted }
                type="checkbox" />
            </p>

            <p>
              <strong>Analysis: </strong> 
              { this.props.task.analysis_duration } hours
            </p>

            <p>
              <strong>Testing: </strong> 
              { this.props.task.testing_duration } hours
            </p>

            <p>
              <strong>Development: </strong> 
              { this.props.task.development_duration } hours
            </p>
          </div>
        </div>

        <div className="media-right">
          <button className="delete" onClick={ this.onRemove }></button>
        </div>
      </article>
    )
  }
}
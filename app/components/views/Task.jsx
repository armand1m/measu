import React from 'react'

const util = {
  isHidden: {
    display: "none"
  }
}

export default class Task extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.props.onChange.bind(this, this.props.task)
    this.onRemove = this.props.onRemove.bind(this, this.props.task)
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    return (
      <article className="media">
        <div className="media-content">
          <a 
            className="title is-3 is-marginless" 
            onClick={ this.onClick }>
            { this.props.task.title }
          </a>

          <div className="content" style={ this.props.open ? {} : util.isHidden }>
            <br />
            <br />

            <p>
              <strong>Description: </strong>
              { this.props.task.description }
            </p>


            <p>
              <strong>Analisis: </strong> 
              { this.props.task.analisis_duration } hours
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
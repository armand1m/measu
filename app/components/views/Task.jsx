import React from 'react'

export default class Task extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.props.onChange.bind(this, this.props.task)
    this.onRemove = this.props.onRemove.bind(this, this.props.task)
  }

  render() {
    return (
      <div style={ { border: "1px solid #f00" } }>
        <h4>{ this.props.task.title }</h4>
        <input type="checkbox" checked={ this.props.task.done } onChange={ this.onChange } />
        
        <div style={{ border: "1px solid #000" }}>
          <p>
            <strong>Description: </strong>
            { this.props.task.description }
          </p>

          <br />

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

        <hr />

        <div style={{ border: "1px solid #000" }}>
          <button onClick={ this.onRemove }>
            Remove
          </button>
        </div>
      </div>
    )
  }
}
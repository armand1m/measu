import React from 'react'

const initialState = {
  title: '',
  description: '',
  analisis_duration: 0,
  testing_duration: 0,
  development_duration: 0,
  done: false
}

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, event) {
    this.setState({...this.state, [key]: event.target.value});
  }

  handleSubmit() {
    this.props.onSubmit(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div style={ { border: "1px solid #000" } } >
        <h4>New Task</h4>

        <label>
          Title
          <input 
            type='text' 
            title='title' 
            value={ this.state.title } 
            onChange={ this.handleChange.bind(this, 'title') } />
        </label>

        <br />
        
        <label>
          Description
          <input 
            type='text' 
            title='description' 
            value={ this.state.description } 
            onChange={ this.handleChange.bind(this, 'description') } />
        </label>

        <br />
        
        <label>
          Hours for Analisis
          <input 
            type='number' 
            title='analisis_duration'
            value={ this.state.analisis_duration } 
            onChange={ this.handleChange.bind(this, 'analisis_duration') } />
        </label>

        <br />
        
        <label>
          Hours for Testing
          <input 
            type='number' 
            title='testing_duration'
            value={ this.state.testing_duration } 
            onChange={ this.handleChange.bind(this, 'testing_duration') } />
        </label>

        <br />
        
        <label>
          Hours for Development
          <input 
            type='number'
            title='development_duration'
            value={ this.state.development_duration } 
            required={ true }
            onChange={ this.handleChange.bind(this, 'development_duration') } />
        </label>

        <br />

        <div style={ { border: "1px solid #111 " }}>
          <button onClick={ this.handleSubmit }>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
import React from 'react'
import TaskService from '../../services/task-service';

const initialState = TaskService.default

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  handleChange(key, event) {
    switch(key) {
      case "discounted":
        this.setState({ ...this.state, [key]: event.target.checked });
        break;

      default:
        this.setState({ ...this.state, [key]: event.target.value });
    }
  }

  handleSubmit() {
    this.props.onSubmit(this.state)
    this.clearState()
  }

  clearState() {
    this.setState(initialState)
  }

  render() {
    return (
      <div className="container">
        <label className="label">Title</label>
        <p className="control">
          <input 
            ref={component => this._taskTitleInput = component}
            className="input"
            type='text' 
            title='title' 
            value={ this.state.title } 
            onChange={ this.handleChange.bind(this, 'title') } />
        </p>
        
        <label className="label">Description</label>
        <p className="control">
          <input 
            className="input"
            type='text' 
            title='description' 
            value={ this.state.description } 
            onChange={ this.handleChange.bind(this, 'description') } />
        </p>

        <label className="label">Discounted?</label>
        <p className="control">
          <input 
            onChange={ this.handleChange.bind(this, 'discounted') }
            checked={ this.state.discounted }
            type="checkbox" />
        </p>
        
        <label className="label">Hours for Analysis</label>
        <p className="control">
          <input 
            className="input"
            type='number' 
            title='analysis_duration'
            value={ this.state.analysis_duration } 
            onChange={ this.handleChange.bind(this, 'analysis_duration') } />
        </p>

        <label className="label">Hours for Testing</label>
        <p className="control">
          <input 
            className="input"
            type='number' 
            title='testing_duration'
            value={ this.state.testing_duration } 
            onChange={ this.handleChange.bind(this, 'testing_duration') } />
        </p>

        <label className="label">Hours for Development</label>
        <p className="control">
          <input 
            className="input"
            type='number'
            title='development_duration'
            value={ this.state.development_duration } 
            required={ true }
            onChange={ this.handleChange.bind(this, 'development_duration') } />
        </p>

        <p className="control">
          <button className="button is-primary is-outlined" onClick={ this.handleSubmit }>Submit</button>
          <button className="button is-link" onClick={ this.clearState }>Cancel</button>
        </p>
      </div>
    )
  }
}
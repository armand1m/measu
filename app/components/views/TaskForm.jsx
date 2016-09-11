import React from "react"
import TaskService from "../../services/task-service";
import Textarea from "react-textarea-autosize"

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
        <p className="control">
          <label className="label">
            Title
            <input

              ref={component => this._taskTitleInput = component}
              className="input"
              type="text"

              title="title"

              value={ this.state.title }

              onChange={ this.handleChange.bind(this, "title") } />
          </label>
        </p>

        <p className="control">
          <label className="label">
            Description
            <Textarea

              className="input"
              title="description"

              value={ this.state.description }

              onChange={ this.handleChange.bind(this, "description") } />
          </label>
        </p>

        <p className="control">
          <label className="label">
            Discounted? &nbsp;
            <input

              onChange={ this.handleChange.bind(this, "discounted") }
              checked={ this.state.discounted }
              type="checkbox" />
          </label>
        </p>

        <p className="control">
          <label className="label">
            Hours for Analysis
            <input

              className="input"
              type="number"

              title="analysis_duration"
              value={ this.state.analysis_duration }

              onChange={ this.handleChange.bind(this, "analysis_duration") } />
          </label>
        </p>


        <p className="control">
          <label className="label">
            Hours for Testing
            <input

              className="input"
              type="number"

              title="testing_duration"
              value={ this.state.testing_duration }

              onChange={ this.handleChange.bind(this, "testing_duration") } />
          </label>
        </p>


        <p className="control">
          <label className="label">
            Hours for Development
            <input

              className="input"
              type="number"
              title="development_duration"
              value={ this.state.development_duration }

              required={ true }
              onChange={ this.handleChange.bind(this, "development_duration") } />
          </label>
        </p>

        <p className="control">
          <button
            className="button is-primary is-outlined"
            onClick={ this.handleSubmit }>Submit</button>
          <button
            className="button is-link"
            onClick={ this.clearState }>Cancel</button>
        </p>
      </div>
    )
  }
}

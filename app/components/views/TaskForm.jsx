import React from 'react'
import moment from 'moment'
import { Input, TimePicker, IconButton, Card, CardActions } from 'react-toolbox'
import TaskFormCardTheme from '../../theme/TaskFormCard';
import TaskFormCardActionsTheme from '../../theme/TaskFormCardActions';

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

  handleChange(key, value) {
    this.setState({...this.state, [key]: value});
  }

  handleSubmit() {
    this.props.onSubmit(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <Card theme={ TaskFormCardTheme }>
        <h4>New Task</h4>

        <Input 
          type='text' 
          label='Title' 
          title='title' 
          value={ this.state.title } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'title') } 
          maxLength={ 25 } />

        <Input 
          type='text' 
          label='Description' 
          title='description' 
          value={ this.state.description } 
          required={ true }
          multiline={ true }
          onChange={ this.handleChange.bind(this, 'description') } 
          maxLength={ 100 } />

        <Input 
          type='number' 
          label='Hours for Analisis' 
          title='analisis_duration'
          value={ this.state.analisis_duration } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'analisis_duration') } />

        <Input 
          type='number' 
          label='Hours for Testing' 
          title='testing_duration'
          value={ this.state.testing_duration } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'testing_duration') } />

        <Input 
          type='number' 
          label='Hours for Development' 
          title='development_duration'
          value={ this.state.development_duration } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'development_duration') } />

        <CardActions theme={ TaskFormCardActionsTheme }>
          <IconButton
            primary
            icon='add'
            onClick={ this.handleSubmit } />
        </CardActions>
      </Card>
    )
  }
}
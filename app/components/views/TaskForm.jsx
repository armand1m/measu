import React from 'react'
import moment from 'moment'
import { Input, TimePicker, IconButton, Card, CardActions } from 'react-toolbox'
import TaskFormCardTheme from '../../theme/TaskFormCard';
import TaskFormCardActionsTheme from '../../theme/TaskFormCardActions';

const initialState = {
  title: '',
  description: '',
  analise: 0,
  teste: 0,
  desenvolvimento: 0,
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
          label='Horas de Analise' 
          title='analise'
          value={ this.state.analise } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'analise') } />

        <Input 
          type='number' 
          label='Horas de Teste' 
          title='teste'
          value={ this.state.teste } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'teste') } />

        <Input 
          type='number' 
          label='Horas de Desenvolvimento' 
          title='desenvolvimento'
          value={ this.state.desenvolvimento } 
          required={ true }
          onChange={ this.handleChange.bind(this, 'desenvolvimento') } />

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
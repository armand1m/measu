import React from 'react'
import { ListCheckbox, Card, CardText, CardActions, IconButton } from 'react-toolbox';
import TaskCardTheme from '../../theme/TaskCard.scss';
import TaskCardTextTheme from '../../theme/TaskCardText.scss';
import TaskCardActionsTheme from '../../theme/TaskCardActions.scss';
import TaskCardListCheckboxTheme from '../../theme/TaskCardListCheckbox.scss';

export default class Task extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.props.onChange.bind(this, this.props.task)
    this.onRemove = this.props.onRemove.bind(this, this.props.task)
  }

  render() {
    return (
      <Card theme={ TaskCardTheme }>
        <ListCheckbox
          theme={ TaskCardListCheckboxTheme }
          caption={ this.props.task.title }
          checked={ this.props.task.done }
          onChange={ this.onChange } />
        
        <CardText theme={ TaskCardTextTheme } >
          { this.props.task.description }
        </CardText>

        <CardActions theme={ TaskCardActionsTheme }>
          <p>
            <strong>Analise: </strong> 
            { this.props.task.analise } horas
          </p>

          <p>
            <strong>Teste: </strong> 
            { this.props.task.teste } horas
          </p>

          <p>
            <strong>Desenvolvimento: </strong> 
            { this.props.task.desenvolvimento } horas
          </p>

          <IconButton
            primary
            icon='delete'
            onClick={ this.onRemove } />
        </CardActions>
      </Card>
    )
  }
}
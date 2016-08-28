import React from 'react'
import { ListCheckbox, ListDivider, Card, CardText, CardActions, IconButton } from 'react-toolbox';
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
        </CardText>

        <ListDivider />

        <CardActions theme={ TaskCardActionsTheme }>
          <IconButton
            primary
            icon='delete'
            onClick={ this.onRemove } />
        </CardActions>
      </Card>
    )
  }
}
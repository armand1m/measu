import React from 'react';
import { Card } from 'react-toolbox'
import ProjectDetailsCardTheme from '../../theme/ProjectDetailsCard';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)

    this.getHours = this.getHours.bind(this)
  }

  getHours() {
    var hours =
      this
      .props
      .tasks
      .map(task =>
          task.analise 
        + task.teste
        + task.desenvolvimento)
      .reduce((previous, current) => 
        previous + current, 0)

    return hours
  }

  getValue() {
    return this.getHours() * this.props.valuePerHour
  }

  render() {
    return (
      <Card theme={ ProjectDetailsCardTheme }>
        <h4>Project Details</h4>

        <p>
          <strong>Horas: </strong> 
          { this.getHours() } horas
        </p>

        <p>
          <strong>Valor: </strong> 
          R$ { this.getValue() }
        </p>
      </Card>
    )
  }
}
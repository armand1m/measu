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
      Object
      .keys(this.props.tasks || {})
      .map(key =>
          this.props.tasks[key].analisis_duration 
        + this.props.tasks[key].testing_duration
        + this.props.tasks[key].development_duration)
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
          <strong>Hours: </strong> 
          { this.getHours() } Hours
        </p>

        <p>
          <strong>Value per Hour: </strong>
          R$ { this.props.valuePerHour }/hour
        </p>

        <p>
          <strong>Result Value: </strong> 
          R$ { this.getValue() }
        </p>
      </Card>
    )
  }
}
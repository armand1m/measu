import React from 'react';
import NonBorderInput from './NonBorderInput';

export default class ProjectDetails extends React.Component {
  render() {
    return (
      <article className="content">
        <h3 className="title is-3">
          <NonBorderInput 
            onChange={ this.props.onFieldChange.bind(this, 'name') }
            value={ this.props.project.name }
            placeholder="Project Name" />
        </h3>

        <p className="subtitle is-4">
          <NonBorderInput 
            onChange={ this.props.onFieldChange.bind(this, 'description') }
            value={ this.props.project.description }
            placeholder="Project Description"/>
        </p>

        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading">Hours</p>
            <p className="title">{ this.props.getTotalHours() }</p>
          </div>
        
          <div className="column">
            <p className="heading">Value per Hour</p>
            <NonBorderInput 
              className="title"
              style={ { textAlign: "center" } }
              onChange={ this.props.onFieldChange.bind(this, 'valuePerHour') }
              value={ this.props.project.valuePerHour }
              placeholder="0"/>
          </div>
        </div>

        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading">Total Cost</p>
            <p className="title">{ this.props.valueUnit } { this.props.getTotalValue() }</p>
          </div>
        </div>
      </article> 
    )
  }
}
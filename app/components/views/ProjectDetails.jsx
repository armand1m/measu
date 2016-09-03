import React from 'react';
import NonBorderInput from './NonBorderInput';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className="content">
        <h3 className="title is-3">
          <NonBorderInput placeholder="Project Name"/>
        </h3>

        <p className="subtitle is-4">
          <NonBorderInput placeholder="Project Description"/>
        </p>

        <nav className="level is-hidden-touch">
          <div className="level-item has-text-centered">
            <p className="heading">Hours</p>
            <p className="title">{ this.props.getTotalHours() }</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Value per Hour</p>
            <p className="title">{ this.props.valueUnit } { this.props.valuePerHour }</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Total Cost</p>
            <p className="title">{ this.props.valueUnit } { this.props.getTotalValue() }</p>
          </div>
        </nav>

        <nav className="level is-hidden-desktop">
          <div className="level-item">
            <p className="heading">Hours</p>
            <p className="title">{ this.props.getTotalHours() }</p>
          </div>
          <div className="level-item">
            <p className="heading">Value per Hour</p>
            <p className="title">{ this.props.valueUnit } { this.props.valuePerHour }</p>
          </div>
          <div className="level-item">
            <p className="heading">Total Cost</p>
            <p className="title">{ this.props.valueUnit } { this.props.getTotalValue() }</p>
          </div>
        </nav>
      </article> 
    )
  }
}
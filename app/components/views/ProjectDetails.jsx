import React from 'react';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className="content">
        <h3 className="title is-3">Project Name</h3>
        <p className="subtitle is-4">Project Description</p>

        <nav className="level">
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
      </article> 
    )
  }
}
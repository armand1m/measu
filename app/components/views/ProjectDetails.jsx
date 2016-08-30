import React from 'react';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="images/photo.gif" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">Project Name</h3>
            <p className="subtitle is-4">Project Description</p>

            <p>
              <strong>Hours: </strong> 
              { this.props.getTotalHours() }
            </p>

            <p>
              <strong>Value per Hour: </strong>
              { this.props.valueUnit } { this.props.valuePerHour }
            </p>

            <p>
              <strong>Result Value: </strong> 
              { this.props.valueUnit } { this.props.getTotalValue() }
            </p>
          </div>
        </div>
      </article> 
    )
  }
}
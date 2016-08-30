import React from 'react';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={ { border: "1px solid #f00" } }>
        <h4>Project Details</h4>

        <div style={ { border: "1px solid #ff0" } }>
          <div style={ { border: "1px solid #000" } }>
            <img src="images/photo.gif" />
            <h4>
              Project Name <br />
              <small>Project Description</small>
            </h4>
          </div>

          <hr />

          <div style={ { border: "1px solid #333" } }>
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
      </div>
    )
  }
}
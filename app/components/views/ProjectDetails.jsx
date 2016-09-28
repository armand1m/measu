import React from 'react';
import NonBorderInput from './NonBorderInput';
import NonBorderTextarea from './NonBorderTextarea';

const isDanger = {
  color: "#ed6c63"
}

const isSafe = {
  color: "#97cd76"
}

export default class ProjectDetails extends React.Component {
  render() {
    let discountedValue = this.props.getDiscountedValue()

    return (
      <article className="content">
        <h3 className="title is-3">
          <NonBorderTextarea
            onChange={ this.props.onFieldChange.bind(this, 'name') }
            value={ this.props.project.name }
            placeholder="Project Name" />
        </h3>

        <p className="subtitle is-4">
          <NonBorderTextarea
            onChange={ this.props.onFieldChange.bind(this, 'description') }
            value={ this.props.project.description }
            placeholder="Project Description"/>
        </p>

        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading">
              Value per Hour
            </p>
            <NonBorderInput
              className="title"
              style={ { textAlign: "center" } }
              onChange={ this.props.onFieldChange.bind(this, 'valuePerHour') }
              value={ this.props.project.valuePerHour }
              placeholder="0"
              placeholderIsMinWidth={ true }/>
          </div>
        </div>

        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading">
              Discounted Hours
            </p>
            <p className="title">
              { this.props.getDiscountedHours() }
            </p>
          </div>

          <div className="column">
            <p className="heading">
              Total Hours
            </p>
            <p className="title">
              { this.props.getTotalHours() }
            </p>
          </div>
        </div>

        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading">
              Discounted Cost
            </p>
            <p
              className="title"
              style={ discountedValue ? isDanger : null }>
              { this.props.valueUnit } { discountedValue }
            </p>
          </div>

          <div className="column">
            <p className="heading">
              Total Cost
            </p>
            <p className="title" style={ isSafe } >
              { this.props.valueUnit } { this.props.getTotalValue() }
            </p>
          </div>
        </div>

        <hr />

        <div className="is-fullwidth has-text-right">
          <button
            className="button is-primary is-outlined"
            onClick={ this.props.onExportClick }>
            Export
          </button>
        </div>
      </article>
    )
  }
}

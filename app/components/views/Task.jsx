import React from 'react'
import NonBorderInput from './NonBorderInput'
import NonBorderTextarea from './NonBorderTextarea'

const util = {
  isHidden: {
    display: "none"
  },
  isDanger: {
    color: "#ed6c63"
  },
  isSafe: {
    color: "#97cd76"
  },
  isEditing: {
    color: "#1fc8db"
  },
  editButton: {
    paddingLeft: "3px"
  },
  contentDivider: { 
    margin: "1em 0", 
    borderColor: "#eee" 
  },
  editableTitle: {
    padding: "2px 6px 3px"
  },
  editableDescription: { 
    color: "#69707a", 
    fontSize: "100%", 
    lineHeight: "1.428571428571429" 
  },
  discountedLabel: { 
    display: "flex", 
    alignItems: "center" 
  }
}

export default class Task extends React.Component {
  constructor(props) {
    super(props)

    this.onRemove = this.props.onRemove.bind(this, this.props.task)
  }

  createEditButton() {
    let style =
      this.props.isEditMode 
      ? [ util.editButton, util.isEditing ] 
      : util.editButton

    return (
      <span 
        className="icon pointer-cursor-on-hover" 
        onClick={ this.props.toggleEditMode }>
        <i 
          className="fa fa-edit" 
          style={ style }>
        </i>
      </span>
    )
  }

  createEditable() {
    return (
      <div className="media-content">
        <div className="task__header">
          { this.createEditButton() }

          <NonBorderTextarea
            className="title is-3 is-marginless"
            value={ this.props.task.title }
            style={ util.editableTitle }
            onChange={ this.props.onFieldChange.bind(this, 'title') } />
        </div>

        <div className="content">
          <hr style={ util.contentDivider } />

          <p className="control">
            <label className="label">
              Description: 
              <NonBorderTextarea 
                onChange={ this.props.onFieldChange.bind(this, 'description') }
                value={ this.props.task.description }
                style={ util.editableDescription }
                placeholder="..." />
            </label>
          </p>

          <p className="control">
            <label className="label">
              Discounted? &nbsp;
              <input 
                onChange={ this.props.onFieldChange.bind(this, 'discounted') }
                checked={ this.props.task.discounted }
                type="checkbox" />
            </label>
          </p>

          <div className="control">
            <label className="label">
              Analysis in Hours: &nbsp;
              <NonBorderInput
                onChange={ this.props.onFieldChange.bind(this, 'analysis_duration') }
                value={ this.props.task.analysis_duration }
                defaultValue={ 0 }
                placeholder="0" />
            </label>
          </div>
          
          <div className="control">
            <label className="label">
              Testing in Hours: &nbsp; 
              <NonBorderInput 
                onChange={ this.props.onFieldChange.bind(this, 'testing_duration') }
                value={ this.props.task.testing_duration }
                defaultValue={ 0 }
                placeholder="0" /> 
            </label>
          </div>

          <div className="control">
            <label className="label">
              Development in Hours: &nbsp; 
              <NonBorderInput 
                onChange={ this.props.onFieldChange.bind(this, 'development_duration') }
                value={ this.props.task.development_duration }
                defaultValue={ 0 }
                placeholder="0" />
            </label>
          </div>
        </div>
      </div>
    )
  }

  createReadOnly() {
    var headerStyle = this.props.task.discounted ? util.isDanger : null
    var discountedIconClass = "fa " + (this.props.task.discounted ? "fa-check" : "fa-times")

    return (
      <div className="media-content">
        <div className="task__header">
          { this.createEditButton() }

          <button
            className="task__name title is-3 is-marginless non-styled-button"
            onClick={ this.props.toggleDescription }
            style={ [ headerStyle, { textAlign: 'left' } ] }>
            { this.props.task.title }
          </button>
        </div>

        <div className="content" style={ this.props.open ? {} : util.isHidden }>
          <hr style={ util.contentDivider } />

          <p>
            <label className="label">
              Description: 
            </label>
            { this.props.task.description ? this.props.task.description : "No description." }
          </p>

          <p>
            <label className="label" style={ util.discountedLabel }>
              Discounted?
              <span className="icon">
                <i className={ discountedIconClass }></i>
              </span>
            </label>
          </p>

          <p>
            <label className="label">
              Analysis: 
              <span> { this.props.task.analysis_duration } hours </span>
            </label> 
          </p>

          <p>
            <label className="label">
              Testing: 
              <span> { this.props.task.testing_duration } hours</span>
            </label> 
          </p>

          <p>
            <label className="label">
              Development: 
              <span> { this.props.task.development_duration } hours</span>
            </label> 
          </p>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <article className="media">
        { !this.props.isEditMode ? this.createReadOnly() : this.createEditable() }

        <div className="media-right">
          <button className="delete" onClick={ this.onRemove }></button>
        </div>
      </article>
    )
  }
}
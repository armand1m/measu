import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import ProjectDetails from '../views/ProjectDetails.jsx';
import { getTaskTotalHours, getTaskTotalValue } from '../../services/task-service';
import { setProject, changeProject } from '../../actions/project-actions';
import {FirebaseModel} from '../../services/firebase-service';
import ProjectService from '../../services/project-service';

const FirebaseService = new FirebaseModel()

class ProjectDetailsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getTotalHours = this.getTotalHours.bind(this)
    this.getTotalValue = this.getTotalValue.bind(this)
    this.getDiscountedHours = this.getDiscountedHours.bind(this)
    this.getDiscountedValue = this.getDiscountedValue.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onExportClick = this.onExportClick.bind(this)
  }

  componentDidMount() {
    var projectRef = ProjectService.getReference()

    projectRef.once('value', snapshot => {
      this.props.dispatch(setProject(snapshot.val()))
    })

    projectRef.on('child_changed', snapshot => {
      this.props.dispatch(changeProject(snapshot.key, snapshot.val()))
    })
  }
  
  getTotalHours(discount = false) {
    return Object.keys(this.props.tasks || {})
      .map(key => {
        if (discount && this.props.tasks[key].discounted)
          return 0

        return getTaskTotalHours(this.props.tasks[key])
      })
      .reduce((previous, current) => previous + current, 0)
  }

  getDiscountedHours() {
    return Object.keys(this.props.tasks || {})
      .map(key => {
        if (this.props.tasks[key].discounted) {
          return getTaskTotalHours(this.props.tasks[key])
        }

        return 0
      })
      .reduce((previous, current) => previous + current, 0) 
  }

  getTotalValue() {
    return this.getTotalHours(true) * this.props.project.valuePerHour
  }

  getDiscountedValue() {
   return this.getDiscountedHours() * this.props.project.valuePerHour 
  }

  onFieldChange(key, e) {
    var data = {
      [key]: e.target.value
    }

    ProjectService.update(null, data)
  }

  onExportClick() {
    FirebaseService
    .getReference()
    .once('value', snapshot => {
      var data = JSON.stringify(snapshot.val())

      download(data, `${this.props.project.name}.json`, 'application/json')
    })
  }

  render() {
    return (
      <ProjectDetails
        valueUnit={ config.valueUnit }
        getTotalHours={ this.getTotalHours }
        getTotalValue={ this.getTotalValue }
        getDiscountedHours={ this.getDiscountedHours }
        getDiscountedValue={ this.getDiscountedValue }
        onFieldChange={ this.onFieldChange }
        onExportClick={ this.onExportClick }
        project={ this.props.project }
        tasks={ this.props.tasks } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks, project } = state

  return { tasks, project }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);
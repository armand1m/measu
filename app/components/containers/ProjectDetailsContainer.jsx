import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import ProjectDetails from '../views/ProjectDetails.jsx';
import { getTaskTotalHours, getTaskTotalValue } from '../../services/task-service';
import { changeProject } from '../../actions/projects';
import { FirebaseModel } from '../../services/firebase-service';
import ProjectService from '../../services/project-service';
import GenerateMarkdown from '../../services/markdown-service';

const FirebaseService = new FirebaseModel()

function _mapThenSum(array, mapper) {
  const sumReducer = (previous, current) => previous + current

  return array
    .map(mapper)
    .reduce(sumReducer, 0)
}

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

  get currentKey() {
    return this.props.projectId 
  }

  get project() {
    return this.currentKey
      ? this.props.projects[this.currentKey]
      : {}
  }

  get tasks() {
    return Object
      .keys(this.props.tasks)
      .map(key => this.props.tasks[key])
      .filter(task => task.projectId == this.currentKey)
  }

  componentDidMount() {
    var ref = ProjectService.getReference(this.currentKey)

    ref.on('child_changed', snapshot => {
      if (this.currentKey)
        this.props.dispatch(changeProject(this.currentKey, snapshot.key, snapshot.val()))
    })
  }

  getTotalHours(discount = false) {
    return _mapThenSum(
      this.tasks, 
      task => (discount && task.discounted) ? 0 : getTaskTotalHours(task)
    )
  }

  getDiscountedHours() {
    return _mapThenSum(
      this.tasks, 
      task => (task.discounted) ? getTaskTotalHours(task) : 0
    )
  }

  getValuePerHour() {
    return (this.project && this.project.valuePerHour) 
      ? this.project.valuePerHour 
      : 0
  }

  getTotalValue() {
    return this.getTotalHours(true) * this.getValuePerHour()
  }

  getDiscountedValue() {
    return this.getDiscountedHours() * this.getValuePerHour()
  }

  onFieldChange(key, e) {
    if (!this.currentKey)
      return

    let data = {
      [key]: e.target.value
    }

    ProjectService.update(this.currentKey, data)
  }

  onExportClick(type) {
    FirebaseService
    .getReference()
    .once('value', snapshot => {
      let json = JSON.stringify(snapshot.val())

      switch(type) {
        case 'md':
          download(GenerateMarkdown(this.project, this.tasks), `${this.project.name}.md`, 'text/markdown')
          break;

        default:
          download(json, `${this.project.name}.json`, 'application/json')
      }
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
        project={ this.project }
        tasks={ this.tasks } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { tasks, projects } = state

  return { tasks, projects }
}

export default connect(mapStateToProps)(ProjectDetailsContainer);

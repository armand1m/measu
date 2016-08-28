import React from 'react';
import { Card, List, ListItem, ListDivider } from 'react-toolbox'
import ProjectDetailsCardTheme from '../../theme/ProjectDetailsCard';
import ProjectDetailsListItemTheme from '../../theme/ProjectDetailsListItem';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card theme={ ProjectDetailsCardTheme }>
        <h4>Project Details</h4>

        <List>
          <ListItem
            theme={ ProjectDetailsListItemTheme }
            avatar='images/photo.gif'
            caption='Project Name'
            legend='Project Description' />

          <ListDivider />

          <p>
            <strong>Hours: </strong> 
            { this.props.getTotalHours() }
          </p>

          <p>
            <strong>Value per Hour: </strong>
            R$ { this.props.valuePerHour }/hour
          </p>

          <p>
            <strong>Result Value: </strong> 
            R$ { this.props.getTotalValue() }
          </p>
        </List>
      </Card>
    )
  }
}
import React from 'react';
import { Link } from 'react-router';
import MeasuLogo from './MeasuLogo.jsx';

export default class MainHeader extends React.Component {
  render() {
    return (
      <div className="content has-text-centered" style={{ marginBottom: "0"}}>
        <div className="title is-1 is-marginless">
          <MeasuLogo />
        </div>

        { this.props.children }
      </div>
    )
  }
}
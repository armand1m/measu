import React from 'react';
import MeasuLogo from './MeasuLogo.jsx';

export default class MainFooter extends React.Component {
  render() {
    return (
      <div className="content has-text-centered">
        <div className="title is-1">
          <MeasuLogo />
        </div>
      </div>
    )
  }
}
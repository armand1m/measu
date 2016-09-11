import React from 'react';
import MeasuLogo from './MeasuLogo.jsx';

export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container content has-text-centered">
          <MeasuLogo centered={ true }/>
          was created by the folks at <a href="http://fluxor.org" target="_blank">Fluxor</a>.
        </div>
      </footer>
    )
  }
}

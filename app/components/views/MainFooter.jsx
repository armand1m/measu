import React from 'react';
import MeasuLogo from './MeasuLogo.jsx';

export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer" style={ { padding: "0", margin: "40px 20px 80px" } }>
        <div className="container">
          <div className="content has-text-centered">
            <MeasuLogo centered={ true }/>
            was created by the folks at <a href="http://fluxor.org" target="_blank">Fluxor</a>.
          </div>
        </div>
      </footer>
    )
  }
}

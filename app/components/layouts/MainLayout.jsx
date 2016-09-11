import React from 'react';
import MainHeader from '../views/MainHeader.jsx';
import MainFooter from "../views/MainFooter.jsx"

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="container is-fluid">
        <MainHeader />
          { this.props.children }
        <MainFooter />
      </div>
    );
  }
}

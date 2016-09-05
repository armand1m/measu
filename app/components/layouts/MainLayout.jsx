import React from 'react';
import MainHeader from '../views/MainHeader.jsx';
import MainFooter from "../views/MainFooter.jsx"

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebar: {
        pinned: false
      }
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState({ 
      sidebar: { pinned: !this.state.sidebar.pinned }
    })
  }

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

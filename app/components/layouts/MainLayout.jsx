import React from 'react';

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
      <div>
        <div className="container">
          { this.props.children }
        </div>
      </div>    
    );
  }
}

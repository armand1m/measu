import React from 'react'
import MenuContainer from '../containers/MenuContainer.jsx'
import MainHeader from '../views/MainHeader.jsx'
import MainFooter from '../views/MainFooter.jsx'

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flex: "1"
  }
}

export default class MainLayout extends React.Component {
  render() {
    return (
      <div 
        style={ styles.container } 
        className="container is-fluid">
        <MainHeader>
          <MenuContainer />
        </MainHeader>
        
        <div style={ styles.content }>
          { this.props.children }
        </div>
        <MainFooter />
      </div>
    )
  }
}

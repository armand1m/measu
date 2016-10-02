import React from 'react'
import Spinner from 'react-spinkit'

export default class LoadingBox extends React.Component {
  render() {
    return (
      <div style={{ 
        display:"flex", 
        height: this.props.fullHeight ? "50vh" : "auto",
        justifyContent: "center", 
        alignItems: "center",
      }}>
        <Spinner spinnerName='double-bounce' />
      </div>
    )
  }
}
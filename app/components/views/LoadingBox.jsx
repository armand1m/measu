import React from 'react'
import Spinner from 'react-spinkit'

export default class LoadingBox extends React.Component {
  render() {
    return (
      <div style={{ 
        display:"flex", 
        height: "50vh",
        justifyContent: "center", 
        alignItems: "center",
      }}>
        <Spinner spinnerName='double-bounce' />
      </div>
    )
  }
}
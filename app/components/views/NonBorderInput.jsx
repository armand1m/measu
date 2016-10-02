import React from 'react'
import AutosizeInput from 'react-input-autosize'

const style = {
  border: "none",
  outline: "none",
  width: "100%",
  maxWidth: "100%",
  resize: "none", 
  fontWeight: "200"
}

export default class NonBorderInput extends React.Component {
  render() {
    var styleObj = Object.assign({}, style, this.props.style)

    return (
      <AutosizeInput 
        { ...this.props }
        minWidth="40"
        inputStyle={ styleObj } />
    )
  }
}
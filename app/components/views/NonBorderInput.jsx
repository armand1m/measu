import React from 'react'
import Textarea from 'react-textarea-autosize'

const style = {
  border: "none",
  outline: "none",
  width: "100%",
  maxWidth: "100%",
  resize: "none"
}

export default class NonBorderInput extends React.Component {
  render() {
    var styleObj = Object.assign({}, style, this.props.style)

    return (
      <Textarea 
        { ...this.props }
        style={ styleObj } />
    )
  }
}
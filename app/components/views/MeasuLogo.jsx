import React from 'react';

const imageStyle = {
  width: "2em",
  borderRadius: "50%",
  margin: ".4em"
}

export default class MeasuLogo extends React.Component {
  render() {
    var logoStyle = {
      alignItems: "center",
      display: "flex",
      fontWeight: 100,
      justifyContent: this.props.centered ? "center" : "initial"
    }

    return (
      <div style={ logoStyle }>
        <img src="images/photo.gif" style={ imageStyle } />
        measu
      </div>
    )
  }
}

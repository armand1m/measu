import React from 'react'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const errorTitles = [
  "ahm..",
  "vish..",
  "hum.",
  "err..",
  ":(",
  "...",
  "¿"
]

export default class Message extends React.Component {
  render() {
    let randomIndex = getRandomInt(0, errorTitles.length)
    let randomTitle = errorTitles[randomIndex]

    return (
      <div className={ this.props.centered ? "has-text-centered" : "" }>
        <p className="title">{ randomTitle }</p>
        <p className="subtitle">{ this.props.children }</p>
      </div>
    )
  }
}
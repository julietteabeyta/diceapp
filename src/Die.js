import React, { Component } from 'react';
import ReactSVG from 'react-svg'

class Die extends Component {

  rollDice = (e) => {
    e.preventDefault();
    const diceId = e.target.id;
    this.setState({ diceId });
    setTimeout(() => {
      document.getElementById(diceId).classList.remove('clicked');
    }, 3000);
    document.getElementById(diceId).classList.add('clicked');

    let linelength = 0;
    let linegap = 1000;
    const timer = setInterval(function () {
      if (linegap > 0) {
        linegap -= 20;
        linelength += 20;
      } else {

        clearInterval(timer);
      }
      document.getElementById(`${diceId}`).setAttribute("stroke-dasharray", linelength + " " + linegap);
    }, 15)

    let values = [];
    let sides = parseInt(diceId, 10);
    let i;
    for (i = 1; i <= sides; i++) {
      values.push(i);
    }

    const rollValue = values[Math.floor(Math.random() * values.length)]
    this.props.displayRoll(rollValue);
  }

  render() {
    const { die } = this.props;
    const svgPath = `d${die}.svg`
    return (
      <ReactSVG src={svgPath}
        onClick={this.rollDice}
        />
    )
  }
}

export default Die
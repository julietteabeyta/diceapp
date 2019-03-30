import React, { Component } from 'react';
import DiceContainer from './DiceContainer';
import './style.css';

class App extends Component {
  state = {
    rollValue: '',
  }

  displayRoll = (rollValue) => {
    setTimeout(() => {
      this.setState({rollValue})
    }, 2000);
    this.setState({ rollValue: '' });
  }

  render() {
    return (
      <div className="app-container">
        <img className="bg-img" src="https://i2.wp.com/www.retro-synthwave.com/wp-content/uploads/2016/10/retro-synthwave_GIF-00-4.gif?zoom=2&fit=500%2C300&ssl=1" alt="Synthwave Background"/>
        <div>
          <div id="rollValue">{this.state.rollValue}</div>
          <DiceContainer
            displayRoll={this.displayRoll}
            className="dice-container"
            />
        </div>
        <button className="reset-button" onClick={() => this.setState({rollValue: ''})}>Reset</button>
      </div>
    );
  }
}

export default App;

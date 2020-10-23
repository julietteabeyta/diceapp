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

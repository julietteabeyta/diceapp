import React, { Component } from 'react';
import DiceContainer from './DiceContainer';
import './style.css';

class App extends Component {
  state = {
    rollValue: '',
  }

  displayRoll = (rollValue, diceRolled) => {
    setTimeout(() => {
      this.setState({rollValue})
    }, 2000);
    this.setState({ rollValue: '' })      
  }

  render() {
    return (
      <div className="app-container">
        <header className="header">
          {/* <h1 className="dice-value">{this.state.rollValue}</h1> */}
        </header>
        <div>
          <DiceContainer
            displayRoll={this.displayRoll}
            className="dice-container"
            rollValue={this.state.rollValue}
            />
        </div>
        <button className="reset-button" onClick={() => this.setState({rollValue: ''})}>Reset</button>
      </div>
    );
  }
}

export default App;

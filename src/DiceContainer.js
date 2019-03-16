import React, { Component } from 'react';
import Die from './Die'

class DiceContainer extends Component {

    state = {
        diceId: '',
    }

    render(){
        const dice = ['20', '12', '10', '8', '6', '4'];
        return(
        <div className="dice-parent">
        {
            dice.map(die=>{
                return (<Die
                    key={die}
                    die={die}
                    displayRoll={this.props.displayRoll}
                />)
        })
        }
        </div>
        )
    }
}

export default DiceContainer
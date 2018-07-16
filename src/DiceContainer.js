import React, { Component } from 'react';
import DiceTwenty from './d20'
import DiceTwelve from './d12'
import DiceTen from './d10'
import DiceEight from './d8'
import DiceSix from './d6'
import DiceFour from './d4'

class DiceContainer extends Component {

    state = {
        diceId: '',
    }

    rollDice = (e) => {

        e.preventDefault();
        var diceId = e.currentTarget.id;
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
            document.getElementById(`d${diceId}`).setAttribute("stroke-dasharray", linelength + " " + linegap);
        }, 15)


        let values = [];
        if(diceId === "20"){
            values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        } else if(diceId === "12"){
            values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        }else if(diceId === "10"){
            values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        } else if(diceId === "8"){
            values = ["1", "2", "3", "4", "5", "6", "7", "8"];
        } else if(diceId === "6"){
            values = ["1", "2", "3", "4", "5", "6"];
        } else if(diceId === "4"){
            values = ["1", "2", "3", "4"];
        } else{
            return;
        }

        const rollValue = values[Math.floor(Math.random() * values.length)]
        this.props.displayRoll(rollValue);
    }

    render(){
        return(
            <div className="dice-parent">
                <DiceTwenty
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}
                  />
                <DiceTwelve
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}
                  />
                <DiceTen
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}
                  />
                <DiceEight
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}
                  />
                <DiceSix
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}

                  />
                <DiceFour
                  rollDice={this.rollDice}
                  rollValue={this.props.rollValue}
                  diceId={this.state.diceId}
                  />
            </div>
        )
    }
}

export default DiceContainer
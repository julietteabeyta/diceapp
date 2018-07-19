import React, { Component } from 'react';
import Die from './Die';

class DiceContainer extends Component {
    render(){
        return(
            <div className="dice-parent">
                <Die sides={20}/>
                <Die sides={12}/>
                <Die sides={10}/>
                <Die sides={8}/>
                <Die sides={6}/>
                <Die sides={4}/>
            </div>
        )
    }
}

export default DiceContainer
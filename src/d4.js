import React, { Component } from 'react';

class DiceFour extends Component {

    render() {
        let rollValue;
        let x1,x2;
        if (this.props.diceId === "4") {
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }

        if(this.props.rollValue === "1"){
            x1 = "250";
            x2 = "350"
        } else {
            x1 = "225"
            x2 = "325"
        }

        return (
            <svg viewBox="0 0 636 638" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="4">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-3628 -192)" stroke="#D0021B" strokeWidth="5">
                        <g id="d4" transform="translate(3631 197)">
                            <path id="Path-15" d="M330.26746 0L0 419.345457 330.26746 631 630 419.345457 330.26746 0v631" />
                            <text transform="translate(247.580059, 160.327132) rotate(23.000000) translate(-247.580059, -160.327132) " fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x={x1} y="300">{rollValue}</tspan>
                            </text>
                            <text transform="translate(350.580059, 164.327132) rotate(-23.000000) translate(-350.580059, -164.327132) " fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x={x2} y="330">{rollValue}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceFour;
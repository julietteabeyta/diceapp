import React, { Component } from 'react';

class DiceEight extends Component {

    render() {
        let rollValue;
        if (this.props.diceId === "8") {
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }
        return (
            <svg viewBox="0 0 514 635" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="8">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-2341 -188)" stroke="#D0021B" strokeWidth="5">
                        <g id="d8" transform="translate(2342 190)">
                            <path id="Path-11" d="M257.908901.03552975L1.33284743 191.803145v248.954486H510.379429L279.804335 41.2088731l-22.725-39.41197897L1.33284743 443.757631" />
                            <path id="Path-12" d="M.8270707 442.08843L256.184168 630.937533 510.764701 442.08843V191.241838L256.184168 0" />
                            {this.props.rollValue === "1" ?
                            <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x="225" y="340">{rollValue}</tspan>
                            </text>
                            :
                            <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x="205" y="340">{rollValue}</tspan>
                            </text>
                            }
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceEight
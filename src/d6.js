import React, { Component } from 'react';

class DiceSix extends Component {

    render() {
        let rollValue;
        let xValue;

        if (this.props.diceId === "6") {
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }

        if(this.props.rollValue === "1"){
            xValue = "250";
        } else {
            xValue = "235";
        }

        return (
            <svg viewBox="0 0 564 633" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="6">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-2960 -196)" stroke="#D0021B" strokeWidth="5">
                        <g id="d6" transform="translate(2962 197)">
                            <path id="Path-13" d="M.75482739 154.589311V471.09163L280.578523 630.117453l278.997052-157.084284V154.589311L280.165201 316.240193l.413322 313.87726" />
                            <path id="Path-14" d="M279.883834 315.430744L1.85970027 154.388924 275.977515.73241976 559.74573 153.306743" />
                            <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x={xValue} y="200">{rollValue}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceSix
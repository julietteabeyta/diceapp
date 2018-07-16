import React, { Component } from 'react';

class DiceTwenty extends Component {

    render() {
        let rollValue;
        let xValue;

        if(this.props.diceId === "20"){
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }

        if(this.props.rollValue === "20"){
            xValue = "180";
        } else if (this.props.rollValue === "11"){
            xValue = "220"
        } else if (this.props.rollValue === "1"){
            xValue = "250"
        } else if (parseInt(this.props.rollValue, 0) > 9){
            xValue = "205"
        } else {
            xValue = "230"
        }

        return (
            <svg viewBox="0 0 562 635" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="20">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-265 -228)" stroke="#D0021B" strokeWidth="5">
                        <g id="d20" transform="translate(267 230)">
                            <path id="Path-16" d="M3.70167422 466.853334l71.92867108-42.692572H480.29533L279.965189 630.767344 3.70167422 466.853334.61583558 156.117003 279.211248 1.4587821V109.812258L.61583558 156.117003 75.6303453 424.160762 279.211248 109.812258 480.29533 424.160762l75.865815 42.692572-276.195956 163.91401L75.6303453 424.160762" />
                            <path id="Path-17" d="M280.124602.12007192L557.504913 159.947671v306.704785" />
                            <path id="Path-18" d="M280.887409 108.520732l275.751712 52.664424-74.443842 264.245754" />
                            <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x={xValue} y="370.75">{rollValue}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceTwenty
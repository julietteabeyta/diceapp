import React from 'react';
import ReactSVG from 'react-svg';

class Die extends React.Component {
    state = {
        rollValue: '',
        rolling: false
    }
    componentDidMount() {
        const sidesString = `d${this.props.sides}`;
        const element = document.getElementById(sidesString);
        element.addEventListener('animationend', this.rollingDone);
        
    }
    rollingDone = () => {
        this.setState({rolling: false});
    }
    roll = e => {
        e.preventDefault();

        const sides = this.props.sides;
        this.setState({rollValue: Math.floor(Math.random() * sides), rolling: true});
    }
    render() {
        const sides = this.props.sides;
        const sidesString = `d${ sides }`;
        return (
            <div id={sidesString} className={ this.state.rolling ? 'rolling' : ''}  onClick={this.roll}>
                <div className="readout">{this.state.rollValue}</div>
                <ReactSVG svgClassName='die-svg' path={require(`./svg/${sidesString}.svg`)} />
            </div>
        )
    }
};

export default Die;
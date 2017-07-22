import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component {
    constructor() {
        super();
        this.style = {
            width: '299px',
            display: 'inline-block',
            size: '20px',
            height: '40px',
            border: '1px solid black',
            background:'#C0C0C0',
            color: 'white',
            textalign: 'right'
        };
    }
    render() {
        return (
        <h2 style={this.style}>{this.props.display}</h2>
        );
    }
}
// state.runningTotal is importante

function mapStateToProps(state) {
    if (!state.operation || state.operand === '0')
    return {
        display:  state.runningTotal 
    };
    else if (typeof state.runningTotal === 'number' && typeof state.operand === 'number')
        return {
        display:  state.runningTotal 
    };
    else return { display: state.operand };
}

export default connect(mapStateToProps)(Display);
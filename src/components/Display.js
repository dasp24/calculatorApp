import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component {
    constructor() {
        super();
        this.textStyle = {
            position:'relative',
            fontfamily: 'serif',
            left:'80px',
            color:'black'
        };
        this.stylings = {
            width: '299px',
            height: '60px',
            border: '1px solid black',
            background:'#39CCCC'
        };
    }
    render() {
        return (
        <div style={this.stylings}>
            <h3 style={this.textStyle}>{this.props.display}</h3>
        </div>
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
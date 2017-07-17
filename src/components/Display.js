import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component {
    constructor() {
        super();
        this.style = {
            width: '300px',
            border: '1px solid green',
            padding: '1px'};
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
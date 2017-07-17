import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component {
    render() {
        return (
        <h2>{this.props.display}</h2>
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
    else return { display: state.operand }
}

export default connect(mapStateToProps)(Display);
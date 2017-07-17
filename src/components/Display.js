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
    return {
        display: (!state.operation || state.operand === '0' || typeof state.runningTotal === 'number') ? state.runningTotal : state.operand
    };
}

export default connect(mapStateToProps)(Display);
import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component {
    render() {
        return (
        <h2>{this.props.runningTotal}</h2>
        );
    }
}
// state.runningTotal is importante

function mapStateToProps(state) {
    return {
        runningTotal: state.runningTotal
    };
}

export default connect(mapStateToProps)(Display);
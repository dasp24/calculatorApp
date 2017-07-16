import React from 'react';
import {connect} from 'react-redux';

import {setOperation} from '../redux/store';

class ButtonsSetFunction extends React.Component {
    render() {
        return (
            <div>
                <h2>These are the funky buttons</h2>
                <button type="button" onClick={() => {this.props.setOperation('+');}}>+</button>
                <button type="button" onClick={() => {this.props.setOperation('-');}}>-</button>
                <button type="button" onClick={() => {this.props.setOperation('/');}}>/</button>
                <button type="button" onClick={() => {this.props.setOperation('*');}}>*</button>
                <button type="button" onClick={() => {this.props.setOperation('%');}}>%</button>
                <button type="button" onClick={() => {this.props.setOperation('+/-');}}>+/-</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setOperation: (value) => {
            dispatch(setOperation(value));
        }
    };
}

export default connect(null,mapDispatchToProps)(ButtonsSetFunction);
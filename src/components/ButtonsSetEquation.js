import React from 'react';
import {connect} from 'react-redux';

import {executeOperation, immediateExecute} from '../redux/store';

class ButtonsSetEquation extends React.Component {
    constructor() {
        super();
        this.equationStyle = {
                background: '#F8F8F8',
                border: '1px solid black',
                padding: '15px 32px',
                textalign: 'center',
                textdecoration: 'none',
                display: 'inline-block',
                fontsize: '16px'
        };
            this.funkyStyle = {
            background: 'orange',
            color:'white',
            border: '1px solid black',
            padding: '15px 32px',
            textalign: 'center',
            textdecoration: 'none',
            display: 'inline-block',
            fontsize: '25px'
        };
    }
    render() {
        return (
            <div>
                 <button type="button" style={this.equationStyle} onClick={() => {this.props.immediateExecute('%');}}>%</button>
                 <button type="button" style={this.equationStyle} onClick={() => {this.props.immediateExecute('+/-');}}>+/-</button>
                 <button type="button" style={this.equationStyle} onClick={() => {this.props.immediateExecute('c');}}>c</button>
                 <button style ={this.funkyStyle} type="button" onClick={() => {this.props.setOperation('/');}}>/</button>

            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        executeOperation: () => {
            dispatch(executeOperation());
        },
        immediateExecute:(value) => {
            dispatch(immediateExecute(value));
        }
    };
}

export default connect(null, mapDispatchToProps)(ButtonsSetEquation);
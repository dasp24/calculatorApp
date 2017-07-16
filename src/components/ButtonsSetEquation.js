import React from 'react';
import {connect} from 'react-redux';

import {executeOperation, immediateExecute} from '../redux/store';

class ButtonsSetEquation extends React.Component {
    render() {
        return (
            <div>
                <h2>This executes what i want</h2>
                 <button type="button" onClick={() => {this.props.executeOperation();}}>=</button>
                 <button type="button" onClick={() => {this.props.immediateExecute('%');}}>%</button>
                 <button type="button" onClick={() => {this.props.immediateExecute('+/-');}}>+/-</button>
                 <button type="button" onClick={() => {this.props.immediateExecute('c');}}>c</button>
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
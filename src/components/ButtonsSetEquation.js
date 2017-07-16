import React from 'react';
import {connect} from 'react-redux';

import {executeOperation} from '../redux/store';

class ButtonsSetEquation extends React.Component {
    render() {
        return (
            <div>
                <h2>This executes what i want</h2>
                 <button type="button" onClick={() => {this.props.executeOperation();}}>=</button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        executeOperation: () => {
            dispatch(executeOperation());
        }
    };
}

export default connect(null, mapDispatchToProps)(ButtonsSetEquation);
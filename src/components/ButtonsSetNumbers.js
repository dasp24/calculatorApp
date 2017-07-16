import React from 'react';
import {connect} from 'react-redux';

import {appendValue} from '../redux/store';

class ButtonsSetNumbers extends React.Component {
    render() {
        return (
            <div>
                <h2>These are the basic numbers</h2>
                <button type="button" onClick={() => this.props.appendValue('.')}>.</button>
                <button type="button" onClick={() => this.props.appendValue('0')}>0</button>
                <button type="button" onClick={() => this.props.appendValue('1')}>1</button>
                <button type="button" onClick={() => this.props.appendValue('2')}>2</button>
                <button type="button" onClick={() => this.props.appendValue('3')}>3</button>
                <button type="button" onClick={() => this.props.appendValue('4')}>4</button>
                <button type="button" onClick={() => this.props.appendValue('5')}>5</button>
                <button type="button" onClick={() => this.props.appendValue('6')}>6</button>
                <button type="button" onClick={() => this.props.appendValue('7')}>7</button>
                <button type="button" onClick={() => this.props.appendValue('8')}>8</button>
                <button type="button" onClick={() => this.props.appendValue('9')}>9</button>
            </div>
        );
    }
}
// we care about dispatching an action

// this is magic :)
function mapDispatchToProps(dispatch) {
    return {
        appendValue: (value) => {
            dispatch(appendValue(value));
        }
    };
}

export default connect(null,mapDispatchToProps)(ButtonsSetNumbers);
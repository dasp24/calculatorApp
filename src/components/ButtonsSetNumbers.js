import React from 'react';
import {connect} from 'react-redux';

import {appendValue} from '../redux/store';

class ButtonsSetNumbers extends React.Component {
    render() {
        return (
            <div>
                <div style={this.style}>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('7')}>7</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('8')}>8</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('9')}>9</button>
                    <button style ={this.funkyStyle} type="button" onClick={() => {this.props.setOperation('*');}}>X</button>

                </div>
                <div style={this.style}>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('4')}>4</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('5')}>5</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('6')}>6</button>
                    <button style ={this.funkyStyle} type="button" onClick={() => {this.props.setOperation('-');}}>-</button>
                    
                </div>
                <div style={this.style}>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('1')}>1</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('2')}>2</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('3')}>3</button>
                    <button style ={this.funkyStyle} type="button" onClick={() => {this.props.setOperation('+');}}>+</button>
                </div>
                <div style={this.style}>
                    <button style ={this.zeroStyle} type="button" onClick={() => this.props.appendValue('0')}>0</button>
                    <button style ={this.numberStyle} type="button" onClick={() => this.props.appendValue('.')}>.</button>
                    <button type="button" style={this.funkyStyle} onClick={() => {this.props.executeOperation();}}>=</button>
                </div>
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
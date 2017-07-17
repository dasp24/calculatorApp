import React from 'react';

import ButtonsSetNumbers from './ButtonsSetNumbers';
import ButtonsSetFunction from './ButtonsSetFunction';
import ButtonsSetEquation from './ButtonsSetEquation';
import Display from './Display';
import style from './index.css';

class Calculator extends React.Component {
    render() {
        return (
            <div style={{border:'1px solid red', width:'300px'}}>
                <h1 style={{color:'green'}}>Shaun the calculator</h1>
                <Display/>
                <ButtonsSetNumbers/>
                <ButtonsSetFunction/>
                <ButtonsSetEquation/>
            </div>
        );
    }
}

export default Calculator;
import React from 'react';

import ButtonsSetNumbers from './ButtonsSetNumbers';
import ButtonsSetEquation from './ButtonsSetEquation';
import Display from './Display';
// import style from './index.css';

class Calculator extends React.Component {
    render() {
        return (
            <div style={{border:'1px solid black', width:'300px'}}>
                <h1 style={{color:'red'}}>Shaun the calculator</h1>
                <Display/>
                <ButtonsSetEquation/>
                <ButtonsSetNumbers/>
            </div>
        );
    }
}

export default Calculator;
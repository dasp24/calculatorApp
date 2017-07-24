import React from 'react';

import Buttons from './Buttons';
import Display from './Display';
// import style from './index.css';

class Calculator extends React.Component {
    render() {
        return (
            <div style={{border:'1px solid black', width:'300px', height:'365px'}}>
                <h1 style={{color:'red', position:'relative', left:'10px'}}>Shaun the calculator</h1>
                <Display/>
                <Buttons/>
            </div>
        );
    }
}

export default Calculator;
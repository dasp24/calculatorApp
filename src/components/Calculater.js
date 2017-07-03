import React from 'react';

import Buttons from './Buttons';
import Display from './Display';

class Calculater extends React.Component {
    render() {
        return (
            <div>
                <h1>Calculater</h1>
                <Display/>
                <Buttons/>
            </div>
        );
    }
}

export default Calculater;
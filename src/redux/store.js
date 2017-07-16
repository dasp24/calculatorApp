import {
    createStore
} from 'redux';

import {reducer} from './reducer';
import {SET_OPERATION, APPEND_VALUE, SET_OPERAND, EXECUTE_OPERATION, IMMEDIATE_EXECUTE} from './actions';

export const setOperation = (operation) => {
    return {
        type: SET_OPERATION,
        operation: operation
    };
};

export const appendValue = (value) => {
    return {
        type: APPEND_VALUE,
        value: value
    };
};


export const setOperand = (value) => {
    return {
        type: SET_OPERAND,
        value: value
    };
};

export const executeOperation = (value) => {
    return {
        type: EXECUTE_OPERATION,
        value: value
    };
};

export const immediateExecute = (value) => {
    return {
        type: IMMEDIATE_EXECUTE,
        value: value
    };
};

// reducers are part of the redux api

// func whih accepts pre state - pass everything through in 1 block
// second arg is the action, which is one of the consts above set_op or whatever, updates the state mf

export default createStore(reducer);
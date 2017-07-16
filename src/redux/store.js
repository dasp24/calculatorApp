import {
    createStore
} from 'redux';

const SET_OPERATION = 'SET_OPERATION';

const APPEND_VALUE = 'APPEND_VALUE';

const SET_OPERAND = 'SET_OPERAND';

const EXECUTE_OPERATION = 'EXECUTE_OPERATION';

export const setOperation = (operation) => {
    return {
        type: SET_OPERATION,
        operation: operation
    }
}

export const appendValue = (value) => {
    return {
        type: APPEND_VALUE,
        value: value
    }
}


export const setOperand = (value) => {
    return {
        type: SET_OPERAND,
        value: value
    }
}

export const executeOperation = () => {
    return {
        type: EXECUTE_OPERATION,
    }
}


// reducers are part of the redux api

// func whih accepts pre state - pass everything through in 1 block
// second arg is the action, which is one of the consts above set_op or whatever, updates the state mf

const initialState = {
    runningTotal: '0',
    operation: null,
    operand: '0'
};

function reducer(state = initialState, action) {
    // follows the same pattern
    // switch statement - or similar logic
    switch (action.type) {
        case SET_OPERATION:
            return {
                ...state,
                operation: action.operation
            }
        case APPEND_VALUE:
            const newState = {...state}
            if (newState.operation === null)
            newState.runningTotal = calculateAppendValue(state.runningTotal,action.value)
            else newState.operand = calculateAppendValue(state.operand,action.value)
            return newState;
        case SET_OPERAND:
            return {
                ...state,
                operand: action.value
            }
        case EXECUTE_OPERATION:
            return { ...state,
                operation: null,
                operand: '0',
                runningTotal: calculateTotal(state.runningTotal, state.operation, state.operand)
            }
            // also going to have a default, if it cant find the actions it does something specfic, like null or 0 or again.
        default:
            return state;
    }
}

function calculateTotal(runningTotal, operation, operand) {
    switch (operation) {
        case '+':
            return runningTotal + operand
        case '-':
            return runningTotal - operand
        case '*':
            return runningTotal * operand
        case '/':
            return runningTotal / operand
        default:
            return runningTotal
    }
}

function calculateAppendValue (runningTotal, value) {
    if (runningTotal === '0') return value;
    if (runningTotal.includes('.') && value === '.') return runningTotal;
    else return runningTotal + value;
}

export default createStore(reducer);
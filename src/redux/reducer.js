import {
    createStore
} from 'redux';

import {
    SET_OPERATION,
    APPEND_VALUE,
    SET_OPERAND,
    EXECUTE_OPERATION,
    IMMEDIATE_EXECUTE
} from './actions';

const initialState = {
    runningTotal: '0',
    operation: null,
    operand: '0'
};

export function reducer(state = initialState, action) {
    console.log(state)
    // follows the same pattern
    // switch statement - or similar logic
    switch (action.type) {
        case SET_OPERATION: {
            const newState = {...state};
            if (newState.operation === null) newState.operation = action.operation
            else if (typeof newState.operand === 'number') {
                newState.operand = '0';
                newState.operation = action.operation
            }
            else if (newState.operand && newState.operation && newState.runningTotal) {
                newState.operation = action.operation
                newState.operand = Number(newState.operand)
                newState.runningTotal = calculateTotal(state.runningTotal, newState.operation, state.operand)
            }
            else {
                newState.operation = action.operation;
                newState.runningTotal = calculateTotal(state.runningTotal, newState.operation, state.operand)
            }
            return newState
        }
        case APPEND_VALUE:
            const newState = { ...state
            }
            if (newState.operation === null)
                newState.runningTotal = calculateAppendValue(state.runningTotal, action.value)
            else newState.operand = calculateAppendValue(state.operand, action.value)
            return newState;
        case SET_OPERAND:
            return {
                ...state,
                operand: action.value
            }
        case EXECUTE_OPERATION:
            return { ...state,
                operand: Number(state.operand),
                runningTotal: calculateTotal(state.runningTotal, state.operation, state.operand)
            }
        case IMMEDIATE_EXECUTE:
            return { ...state,
                operation: null,
                operand: '0',
                runningTotal: immediateExecute(state.runningTotal, action.value)
            }
            // also going to have a default, if it cant find the actions it does something specfic, like null or 0 or again.
        default:
            return state;
    }
}

function calculateTotal(runningTotal, operation, operand) {
    switch (operation) {
        case '+':
            return String(Number(runningTotal) + Number(operand))
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

function calculateAppendValue(runningTotal, value) {
    if (runningTotal === '0' || typeof runningTotal === 'number') return value;
    if (runningTotal.includes('.') && value === '.') return runningTotal;
    else return String(runningTotal) + String(value);

}

function immediateExecute(runningTotal, operation) {
    switch (operation) {
        case '%':
            return runningTotal / 100
        case '+/-':
            return runningTotal * -1
        case 'c':
            return '0'
        default:
            return runningTotal
    }
}

export default createStore(reducer);
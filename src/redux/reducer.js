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

import {
    operation,
    updateInput
} from './helperFuncs'

const initialState = {
    runningTotal: '0',
    operation: null,
    operand: '0',
    tempOperation: null,
    tempRunningTotal: '0'
};

export function reducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case SET_OPERATION:
            {
                return operation({ ...state
                }, action)
            }
        case APPEND_VALUE:
            {
                return updateInput({ ...state
                }, action)
            }
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
            return Number(runningTotal) + Number(operand)
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
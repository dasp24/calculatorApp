import {
    createStore
} from 'redux';

const SET_OPERATION = 'SET_OPERATION';

const SET_RUNNING_TOTAL = 'SET_RUNNING_TOTAL';

const SET_OPERAND = 'SET_OPERAND';

const EXECUTE_OPERATION = 'EXECUTE_OPERATION';

const setOperation = (operation) => {
    return {
        type: SET_OPERATION,
        operation: operation
    }
}

const setRunningTotal = (value) => {
    return {
        type: SET_RUNNING_TOTAL,
        value: value
    }
}

const setOperand = (value) => {
    return {
        type: SET_OPERAND,
        value: value
    }
}


// reducers are part of the redux api

// func whih accepts pre state - pass everything through in 1 block
// second arg is the action, which is one of the consts above set_op or whatever, updates the state mf

const initialState = {
    runningTotal: 0,
    operation: null,
    operand: null
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
        case SET_RUNNING_TOTAL:
            return {
                ...state,
                runningTotal: action.value
            }
        case SET_OPERAND:
            return {
                ...state,
                operand: action.value
            }
        case EXECUTE_OPERATION:
            return { ...state,
                operation: null,
                operand: null,
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

export default createStore(reducer);
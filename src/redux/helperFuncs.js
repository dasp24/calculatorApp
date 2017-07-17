export function operation(state, action) {
    console.log(state, action)
    const newState = { ...state
    }
    if (newState.operation === null) newState.operation = action.operation
    else if (newState.operand && newState.operation && newState.runningTotal) {
        newState.operation = action.operation
        newState.operand = Number(newState.operand)
        newState.runningTotal = calculateTotal(state.runningTotal, newState.operation, state.operand)
    } else if (typeof newState.operand === 'number') {
        newState.operand = '0';
        newState.operation = action.operation
    } else {
        newState.operation = action.operation;
        newState.runningTotal = calculateTotal(state.runningTotal, newState.operation, state.operand)
    }
    return newState
}

export function result(state, action) {
    const newState = { ...state
    }
    if (newState.operation === null)
        newState.runningTotal = calculateAppendValue(state.runningTotal, action.value)
    else newState.operand = calculateAppendValue(state.operand, action.value)
    return newState;
    
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

function calculateAppendValue(runningTotal, value) {
    if (runningTotal === '0' || typeof runningTotal === 'number') return value;
    if (runningTotal.includes('.') && value === '.') return runningTotal;
    else return String(runningTotal) + String(value);

}
export function operation(state, action) {
    const newState = { ...state
    }
        newState.operation = action.operation
        return newState;
}

export function updateInput(state, action) {
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

function calculateRunningTotal(runningTotal, operation, operand) {
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
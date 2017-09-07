const operation = (state, action) => {
    const validOperationMatch = /[*|/|+|-]/;
    if (action.operation.match(validOperationMatch))
    state.operation = action.operation;
    return state;
};

const updateInput = (state, action) => {
    if (state.operation === null)
        state.runningTotal = calculateAppendValue(state.runningTotal, action.value);
    else state.operand = calculateAppendValue(state.operand, action.value);
    return state;
};

function calculateAppendValue(runningTotal, value) {
    if (runningTotal === '0' || typeof runningTotal === 'number') return value;
    if (runningTotal.includes('.') && value === '.') return runningTotal;
    else return String(runningTotal) + String(value);
}

const calculateTotal = (runningTotal, operation, operand) => {
    switch (operation) {
        case '+':
            return Number(runningTotal) + Number(operand);
        case '-':
            return runningTotal - operand;
        case '*':
            return runningTotal * operand;
        case '/':
            return runningTotal / operand;
        default:
            return runningTotal;
    }
};

const immediateExecute = (runningTotal, operation) => {
    switch (operation) {
        case '%':
            return runningTotal / 100;
        case '+/-':
            return runningTotal * -1;
        case 'c':
            return 0;
        default:
            return runningTotal;
    }
};

module.exports = {
    operation, 
    updateInput,
    calculateTotal,
    immediateExecute
};
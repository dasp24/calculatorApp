const operation = (state, action) => {
    state.operation = action.operation;
    return state;
};

const updateInput = (state, action) => {
    if (state.operation === null)
        state.runningTotal = calculateAppendValue(state.runningTotal, action.value)
    else state.operand = calculateAppendValue(state.operand, action.value)
    return state;
};

function calculateAppendValue(runningTotal, value) {
    if (runningTotal === '0' || typeof runningTotal === 'number') return value;
    if (runningTotal.includes('.') && value === '.') return runningTotal;
    else return String(runningTotal) + String(value);
}

module.exports = {
    operation, 
    updateInput
};
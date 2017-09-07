const {
    expect
} = require('chai');

const {
    operation, 
    updateInput,
    calculateTotal,
    immediateExecute
} = require('../src/redux/helperFuncs');

describe('helper functions - operation, updateInput, calculateTotal and immediateExecute', () => {
    it('exists', () => {
        expect(operation).to.be.a('function');
        expect(updateInput).to.be.a('function');
        expect(calculateTotal).to.be.a('function');
        expect(immediateExecute).to.be.a('function');
    });
    it('operation changes operation correctly', () => {
        const state = {
            runningTotal: '0',
            operation: null,
            operand: '0',
        };
        const op = {
            type: 'SET_OPERATION',
            operation: '*'
        };
        const op2 = {
            type: 'SET_OPERATION',
            operation: '/'
        };
        const op3 = {
            type: 'SET_OPERATION',
            operation: '+'
        };
        const op4 = {
            type: 'SET_OPERATION',
            operation: '-'
        };
        expect(operation(state, op).operation).to.equal('*');
        expect(operation(state, op2).operation).to.equal('/');
        expect(operation(state, op3).operation).to.equal('+');
        expect(operation(state, op4).operation).to.equal('-');
    });
});